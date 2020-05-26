import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1 className="welcome">Introducing, Chef Remy</h1>

      <h5>
        Meet Chef Remy -- your personal assistant chef. With Remy, you can keep
        track of what you have in your fridge and receive recipe suggestions
        based on those ingredients! Chef Remy is interactive. He can talk to you
        via a companion Alexa Skill or through the website enabled speech. Once
        you decide on a recipe, Chef Remy will take you step-by-step through the
        meal preparation.
      </h5>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/EXpQ9vEJ4XU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <br />

      <Link to="/about-alexa">
        <button type="button" className="entice-btn">
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default Welcome
