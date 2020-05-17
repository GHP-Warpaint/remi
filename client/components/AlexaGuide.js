import React, {Component} from 'react'

class AlexaInstruct extends Component {
  handleSpeech = () => {
    const msg = new SpeechSynthesisUtterance(
      'Welcome to the Alexa guide. Here we explain how to use our companion Alexa skill.'
    )
    msg.lang = 'en-GB'
    window.speechSynthesis.speak(msg)
  }

  render() {
    return (
      <div>
        <br />
        <h1>Chef Remy's Guide to Amazon Alexa</h1>
        <i
          className="fa fa-volume-up"
          id="help-icon"
          aria-hidden="true"
          onClick={this.handleSpeech}
        />
        <br />
        <ul className="instructions">
          <li className="alt1">
            To begin using Chef Remy on your Amazon Alexa enabled device, you'll
            need to enable the Chef Remy skill. Say "Alexa, ask for Chef Remy"
            and he will start asking you to add items to your fridge.
          </li>
          <br />
          <li className="alt2">
            To add food or drinks to your fridge, using tomato as an example,
            you'd say "Add tomato" and Chef Remy will confirm the tomato is now
            in your fridge.
          </li>
          <br />
          <li className="alt1">
            To remove an item from your fridge, say "Remove tomato" and Chef
            Remy will confirm the tomato was removed from your fridge.
          </li>
          <br />
          <li className="alt2">
            If you would like recipes based on the food in your fridge, tell
            Chef Remy "Get a recipe!"
          </li>
          <br />
          <li className="alt1">
            When you're ready to start cooking, tell Chef Remy "Cook this
            recipe" and he will start with the first step.
          </li>
          <br />
          <li className="alt2">
            You can move through the steps of the recipe by saying "Next step"
            or "What's next?"
          </li>
          <br />
          <li className="alt1">
            If you want to hear the last step repeated, ask "Can you repeat
            that?"
          </li>
          <br />
          <li className="alt2">
            To hear the recipe from the beginning, ask Chef Remy "Can you start
            over?"
          </li>
        </ul>
      </div>
    )
  }
}

export default AlexaInstruct
