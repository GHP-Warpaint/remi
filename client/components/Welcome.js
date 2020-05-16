import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1 className="welcome">Introducing, Chef Remy</h1>

      <h5>
        Meet Chef Remy -- Your personal assistant chef. Be prepared to discover
        and cook new tasty recipes. You will receive recipe suggestions based on
        ingredients in your kitchen. Chef Remy is interactive. He can talk to
        you via a companion Alexa Skill or through the website enabled speech.
        Once you decide on a recipe, Chef Remy will take you step-by-step
        through the meal preparation.
      </h5>

      <Link to="/about-alexa">
        <button type="button" className="entice-btn">
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default Welcome
