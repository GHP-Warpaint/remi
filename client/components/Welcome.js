import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1 className="welcome">Introducing, Chef Remy</h1>

      <h5>
        Meet Chef Remy -- Your personal assistant chef Discover and cook new
        recipes. Receive recipe suggestions based on ingredients in stock. Chef
        Remy is able to talk to you via a companion Alexa Skill or through the
        website enabled speech recognition and audio (Users must click to talk).
        Once a recipe is decided on, the application should walk users
        step-by-step through cooking the dish.
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
