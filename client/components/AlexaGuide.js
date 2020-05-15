import React from 'react'

const AlexaInstruct = () => {
  return (
    <div>
      <h1>Chef Remy Alexa Instructions</h1>
      <br />
      <ul className="instructions">
        <li>
          To begin using Chef Remy, say "Alexa, ask for Chef Remy" and he will
          ask you to add items to your fridge
        </li>
        <br />
        <li>
          To add food or drinks to your fridge, using tomato as an example,
          you'd say "Add tomato" and Chef Remy will confirm the tomato is in
          your fridge.
        </li>
        <br />
        <li>
          To remove an item from your fridge, say "Remove tomato" and Chef Remy
          will confirm the tomato was removed from your fridge.
        </li>
        <br />
        <li>
          If you would like recipes based on the food in your fridge, tell Chef
          Remy "Get a recipe!"
        </li>
        <br />
        <li>
          When you're ready to start cooking, tell Chef Remy "Cook this recipe"
          and he will start with the first step.
        </li>
        <br />
        <li>
          You can move through the steps of the recipe by saying "Next step" or
          "What's next?"
        </li>
        <br />
        <li>
          If you want to hear the last step repeated, ask "Can you repeat that?"
        </li>
        <br />
        <li>
          To hear the recipe from the beginning, ask Chef Remy "Can you start
          over?"
        </li>
      </ul>
    </div>
  )
}

export default AlexaInstruct
