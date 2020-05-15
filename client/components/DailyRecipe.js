import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDailyRecipe} from '../reducer/dailyRecipe'

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.onstart = function() {
  console.log('voice is activated, you can speak to the microphone')
}

recognition.onresult = function(evt) {
  const transcript = evt.results[0][0].transcript
  console.log('WHAT YOU SAID=>', transcript)
  readOutLoud(transcript)
}

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance()

  if (message.includes('fridge')) {
    location.assign('https://chef-remy.herokuapp.com/fridge')
    speech.text = 'magnificent decision! Welcome to the fridge.'
  } else if (message.includes('account')) {
    location.assign('https://chef-remy.herokuapp.com/account')
    speech.text =
      "great choice! Let's take a look at your current account details."
  } else if (message.includes('recipe')) {
    location.assign('https://chef-remy.herokuapp.com/recipe')
    speech.text = 'brilliant! Click the button to see what we can create.'
  } else if (message.includes('home')) {
    location.assign('https://chef-remy.herokuapp.com/home')
    speech.text = "Excellent! We're back at our lovely home."
  } else {
    speech.text =
      "Sorry, didn't catch that. if you are not sure what to say, try saying something like 'fridge', or 'lets go to the fridge."
  }

  speech.volume = 1
  speech.rate = 1
  speech.pitch = 1

  //need this v to have window speak back
  window.speechSynthesis.speak(speech)
}

class DailyRecipe extends Component {
  componentDidMount() {
    this.props.getDailyRecipeInfo()
  }

  handleTalk = () => {
    recognition.start()
  }

  render() {
    const randomNum =
      this.props.dailyRec.dailyRecipe.length &&
      Math.floor(Math.random() * this.props.dailyRec.dailyRecipe.length)
    const randomChoice = this.props.dailyRec.dailyRecipe[1]
      ? this.props.dailyRec.dailyRecipe[randomNum]
      : 'loads'
    return (
      <div>
        <h1>Our Suggested Recipe of the Day!</h1>
        {randomChoice !== 'loads' && (
          <div>
            <h3>{randomChoice.title}</h3>
            <img src={randomChoice.imageUrl} height="300" />
            <p>
              Check out the recipe{' '}
              <a
                href={randomChoice.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Here
              </a>
            </p>
          </div>
        )}
        <button type="button" onClick={this.handleTalk}>
          Chat with Remy!
        </button>
      </div>
    )
  }
}

const mapState = state => ({
  dailyRec: state.dailyRecipe
})

const mapDispatch = dispatch => ({
  getDailyRecipeInfo: () => dispatch(getDailyRecipe())
})

export default connect(mapState, mapDispatch)(DailyRecipe)
