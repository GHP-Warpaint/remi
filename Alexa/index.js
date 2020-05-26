// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core')
const persistenceAdapter = require('ask-sdk-s3-persistence-adapter')
const axios = require('axios')

//Loads when there is no userID found. Should only launch for initial setup, then remember UserID
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest'
    )
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const attributes = (await attributesManager.getPersistentAttributes()) || {}

    if (Object.keys(attributes).length === 0) {
      attributes.fridgeState = 'ENDED'
    }
    attributesManager.setSessionAttributes(attributes)
    const speakOutput =
      "Hey there! I'm Chef Remy! To get started, can I have your user ID?"
    const reprompt = 'What is your user Id'
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(reprompt)
      .getResponse()
  }
}

//launch each time a setup user signs in. Should launch every other time other than initial setup. pulls userID and sets both recipe and fridge state to "Ended"
const HasUserIDRequestHandler = {
  canHandle(handlerInput) {
    const attributesManager = handlerInput.attributesManager
    const sessionAttributes = attributesManager.getSessionAttributes() || {}
    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest' &&
      userID
    )
  },
  async handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager
    const sessionAttributes = attributesManager.getSessionAttributes() || {}

    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''

    const requestAttributes = attributesManager.getRequestAttributes()
    const attributes = (await attributesManager.getPersistentAttributes()) || {}

    if (Object.keys(attributes).length < 2) {
      attributes.fridgeState = 'ENDED'
      attributes.recipeState = 'ENDED'
    }

    attributesManager.setSessionAttributes(attributes)

    let speakOutput = `Welcome back to chef Remy. Would you like to open your fridge or get a recipe?`

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

//Loads user ID from state on application launch to check which launch handler to direct to
const LoadUserIDInterceptor = {
  async process(handlerInput) {
    const attributesManager = handlerInput.attributesManager
    const sessionAttributes =
      (await attributesManager.getPersistentAttributes()) || {}
    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''
    if (userID) {
      attributesManager.setSessionAttributes(sessionAttributes)
    }
  }
}

//Loads recipe from state if a user exits the app before completing the recipe steps.
//user story: while chicken was cooking repromt heard no response and closed chef remy. on launch again it will remeber where it was in the recipe

// const LoadRecipeInterceptor = {
//     async process(handlerInput){
//         const attributesManager = handlerInput.attributesManager;
//         const sessionAttributes = await attributesManager.getPersistentAttributes() ||{};
//         const steps = sessionAttributes.hasOwnProperty('steps')?sessionAttributes.steps : '';
//         if(steps){
//             attributesManager.setSessionAttributes(sessionAttributes);
//         }
//     }
// };

//From launchrequest, captures the user ID that was given and adds it to the persistant state
const CaptureUserIDIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'CaptureUserIDIntent'
    )
  },

  async handle(handlerInput) {
    //collects userID from the user and saves to attributes manager

    const userID =
      handlerInput.requestEnvelope.request.intent.slots.userID.value
    const attributesManager = handlerInput.attributesManager
    const userIDAttribute = {
      userID: userID
    }
    attributesManager.setPersistentAttributes(userIDAttribute)
    await attributesManager.savePersistentAttributes()

    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    sessionAttributes.fridgeState = 'ENDED'
    sessionAttributes.recipeState = 'ENDED'

    const speakOut = `Thanks. If you would like to learn more about what I can do say, help. Would you like to add something to your fridge or get a recipe?`

    return handlerInput.responseBuilder
      .speak(speakOut)
      .reprompt(speakOut)
      .getResponse()
  }
}

//from either launchrequest, if user says "fridge" directs to below intent which sets the fridge state to started. Prompts user to begin adding items"

const FridgeIntentHandler = {
  canHandle(handlerInput) {
    let inFridge = false

    const {attributesManager} = handlerInput
    const sessionAttributes = attributesManager.getSessionAttributes()

    if (
      sessionAttributes.fridgeState &&
      sessionAttributes.fridgeState === 'STARTED'
    ) {
      inFridge = true
    }

    return (
      !inFridge &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'FridgeIntent'
    )
  },
  handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    sessionAttributes.fridgeState = 'STARTED'
    sessionAttributes.recipeState = 'ENDED'

    let speakOutput = 'We are in the fridge. What would you like to add?'

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

//if user is in the fridge intent and says "add___" triggers the below intent to pull requested food off session attributes and send to the api as a post request. Adds to the users fridge on webapp
const AddFoodIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AddFoodIntent'
    )
  },
  async handle(handlerInput) {
    const attributesManager = handlerInput.attributesManager
    const sessionAttributes = attributesManager.getSessionAttributes()
    const food = handlerInput.requestEnvelope.request.intent.slots.food.value
    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''
    const sendToDB = {
      userId: userID,
      food: food
    }
    const foodAttribute = {
      food: food
    }

    attributesManager.setPersistentAttributes(foodAttribute)
    await attributesManager.savePersistentAttributes()

    const data = axios.post(
      'https://chef-remy.herokuapp.com/api/alexa/add',
      sendToDB
    )
    let speakOutput = `Added ${food}.`
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Would you like to add anything else?')
      .getResponse()
  }
}
//from either launchrequest, if user says "recipe" directs to below intent which sets the recipe state to started. Prompts user to say yes or no to making suggested recipe"

const RecipeIntentHandler = {
  canHandle(handlerInput) {
    let inRecipe = false

    const {attributesManager} = handlerInput
    const sessionAttributes = attributesManager.getSessionAttributes()

    if (
      sessionAttributes.recipeState &&
      sessionAttributes.recipeState === 'STARTED'
    ) {
      inRecipe = true
    }

    return (
      !inRecipe &&
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'RecipeIntent'
    )
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    sessionAttributes.recipeState = 'STARTED'
    sessionAttributes.fridgeState = 'ENDED'
    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''

    const {data} = await axios.get(
      `https://chef-remy.herokuapp.com/api/alexa/recipe/${userID}`
    )
    sessionAttributes.recipeID = data.recipeId

    const recipeIDAttribute = {
      recipeID: sessionAttributes.recipeID
    }

    attributesManager.setPersistentAttributes(recipeIDAttribute)
    await attributesManager.savePersistentAttributes()

    sessionAttributes.recipeID = data.recipeId
    const recipename = data.recipeTitle

    let speakOutput = `I found a recipe named ${recipename} based on the ingredients in your fridge. Does this sound good?`
    let speakReprompt = 'Let me know when youre ready to start by saying, yes'

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

//if the user replies yes to the given recipe
const YesIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
    )
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    sessionAttributes.fridgeState = 'ENDED'
    sessionAttributes.recipeState = 'STARTED'

    let speakOutput =
      "Great! I'll give you a moment to gather the ingredients. When you're ready to cook say, continue. "
    let speakReprompt = 'Are you still gathering ingredients?'

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

//if user replies "no" to the recipe given- closes out of chef remy completely
const NoIntent = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent'
    )
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    attributesManager.setPersistentAttributes(sessionAttributes)

    await attributesManager.savePersistentAttributes()

    return handlerInput.responseBuilder
      .speak('No problem! Happy Cooking!')
      .getResponse()
  }
}

// reaches this intent when:
//if the user replies yes to the given recipe
// when user says "continue" after completing a step
//when a user has a uncompleted recipe in their state, and says they want to continue with that recipe. Pulls recipie ID off state, uses API call to pull all recipe steps, she starts reading with the last completed step.
const ContinueIntent = {
  canHandle(handlerInput) {
    const attributesManager = handlerInput.attributesManager
    const sessionAttributes = attributesManager.getSessionAttributes() || {}
    const userID = sessionAttributes.hasOwnProperty('userID')
      ? sessionAttributes.userID
      : ''
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'ContinueIntent'
    )
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput
    const requestAttributes = attributesManager.getRequestAttributes()
    const sessionAttributes = attributesManager.getSessionAttributes()

    sessionAttributes.fridgeState = 'ENDED'
    sessionAttributes.recipeState = 'STARTED'

    //pulls steps
    const recipeID = sessionAttributes.hasOwnProperty('recipeID')
      ? sessionAttributes.recipeID
      : ''
    const {data} = await axios.get(
      `https://chef-remy.herokuapp.com/api/alexa/steps/${recipeID}`
    )

    //converts array of objects into array of arrays
    let stepArr = data[0].steps.map(obj => Object.values(obj))

    //sets the steps on session attributes
    sessionAttributes.steps = data.steps

    const recipeStepNumber = sessionAttributes.hasOwnProperty(
      'recipeStepNumber'
    )
      ? sessionAttributes.recipeStepNumber
      : '1'
    for (let i = recipeStepNumber; i < stepArr.length; i++) {
      //pulls the recipe step number off system attributes
      const recipeStepNumber = sessionAttributes.hasOwnProperty(
        'recipeStepNumber'
      )
        ? sessionAttributes.recipeStepNumber
        : ''

      //runs for every step after the first step. Adds 1 to the recipe step number to increment next time you run.
      if (recipeStepNumber > 1) {
        const recipeIDAttribute = {
          recipestep: recipeStepNumber + 1
        }

        attributesManager.setPersistentAttributes(recipeIDAttribute)
        await attributesManager.savePersistentAttributes()
        let speakStepOutput = `Step ${stepArr[i][0]}. ${stepArr[i][1]}`
        //  let speakStepOutput = `Step Three. In a medium pot, add orange juice, sugar, vinegar, soy sauce, ginger, garlic, and red chili flakes. Heat for 3 minutes.`
        return handlerInput.responseBuilder
          .speak(speakStepOutput)
          .reprompt(speakStepOutput)
          .getResponse()
      } else if (recipeStepNumber === 1) {
        //runs only on the first step.
        sessionAttributes.recipeStepNumber = stepArr[i][0]
        const recipeIDAttribute = {
          recipestep: sessionAttributes.recipeStepNumber + 1
        }

        attributesManager.setPersistentAttributes(recipeIDAttribute)
        await attributesManager.savePersistentAttributes()
        // if (recipeStepNumber===1){
        let speakInitialOutput = `I'll begin reading the instructions to you one step at a time. When youre ready for the next step, say continue. Lets get started! Step One. ${
          stepArr[i][1]
        }`
        return handlerInput.responseBuilder
          .speak(speakInitialOutput)
          .reprompt(speakInitialOutput)
          .getResponse()
      } else {
        let speakInitialOutput = `Step One. ${stepArr[i][1]}`
        return handlerInput.responseBuilder
          .speak(speakInitialOutput)
          .reprompt(speakInitialOutput)
          .getResponse()
      }
    }
  }
}

//Any time the user says "help" this intent is triggered
const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent'
    )
  },
  handle(handlerInput) {
    const speakOutput =
      'Im here to help you with all your cooking needs! You can say things like, add to my fridge, to add food to your inventory, or ,get a recipe, for help cooking based on ingedients you already have! So, how can I help you?'

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

//any time user ends chef remy intent is triggered
const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      (Alexa.getIntentName(handlerInput.requestEnvelope) ===
        'AMAZON.CancelIntent' ||
        Alexa.getIntentName(handlerInput.requestEnvelope) ===
          'AMAZON.StopIntent')
    )
  },
  handle(handlerInput) {
    const speakOutput = 'Thanks for cooking!'
    return handlerInput.responseBuilder.speak(speakOutput).getResponse()
  }
}

//ends user session. may be where we have userID persist? Do not clean up session attributes?
const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) ===
      'SessionEndedRequest'
    )
  },
  handle(handlerInput) {
    // Any cleanup logic goes here.
    return handlerInput.responseBuilder.getResponse()
  }
}

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
    )
  },
  handle(handlerInput) {
    const intentName = Alexa.getIntentName(handlerInput.requestEnvelope)
    const speakOutput = `You just triggered ${intentName}`

    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    )
  }
}

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
  canHandle() {
    return true
  },
  handle(handlerInput, error) {
    const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(speakOutput)
      .getResponse()
  }
}

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
  .withPersistenceAdapter(
    new persistenceAdapter.S3PersistenceAdapter({
      bucketName: process.env.S3_PERSISTENCE_BUCKET
    })
  )
  .addRequestHandlers(
    HasUserIDRequestHandler,
    LaunchRequestHandler,
    CaptureUserIDIntentHandler,
    FridgeIntentHandler,
    AddFoodIntentHandler,
    RecipeIntentHandler,
    YesIntent,
    NoIntent,
    ContinueIntent,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
  )
  .addRequestInterceptors(
    LoadUserIDInterceptor
    //LoadRecipeInterceptor
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
