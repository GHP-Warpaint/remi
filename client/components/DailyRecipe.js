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

  //"Welcome to the home of Chef Remy. Please, allow me to show you around. Would you like to add some food to your fridge, update your account details, or generate a new recipe?" (10000ms)
  if (message.includes('fridge')) {
    location.assign('https://chef-remy.herokuapp.com/fridge')
    speech.text =
      "magnificent decision! Welcome to the fridge... Type out the ingredients you have before pressing the add button. When you are done, head over to recipe. We'll make something delicious together."
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
      "Sorry, didn't catch that. If you are not sure what to say, try saying something like 'fridge', or 'lets go to the fridge."
  }

  speech.volume = 1
  speech.rate = 1
  speech.pitch = 1
  speech.lang = 'en-GB'

  //need this v to have window speak back
  window.speechSynthesis.speak(speech)
}

class DailyRecipe extends Component {
  constructor() {
    super()
    this.state = {
      clickedChat: false
    }
  }
  componentDidMount() {
    this.props.getDailyRecipeInfo()
  }

  handleSpeech = () => {
    const msg = new SpeechSynthesisUtterance(
      'Welcome to the home of Chef Remy. Please allow me to show you around. Would you like to add some food to your fridge, update your account details, or generate a new recipe?'
    )
    msg.lang = 'en-GB'
    window.speechSynthesis.speak(msg)
  }

  letThemTalk = () => {
    console.log('THE WAIT IS OVER')
    this.setState({
      clickedChat: true
    })
  }

  timer = () => {
    setTimeout(this.letThemTalk, 10000)
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
        <br />
        <h1>Our Suggested Recipes of the Day!</h1> <br />
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
        <br />
        <div>
          <h2>New to Chef Remy</h2>
          <p>
            Have an Amazon Alexa enabled device? <br />
            Find us in your skill store! <br />
            Don’t want to use Alexa? That's fine too! <br /> We recommend
            talking to Chef Remy on our site. <br /> To get started, find the
            button that says "Chat with Remy!"
          </p>
        </div>
        <br />
        <br />
        {this.state.clickedChat === false ? (
          <button
            type="button"
            onClick={() => {
              this.handleSpeech() //(REASON WHY NO SPEECH ON INITL BTN CLICK)Remy starts his speech of how to boss him around
              this.timer() //(DONE) sets clickedChat on state to true so the 'respond to Remy' btn can be activated
            }}
          >
            Chat with Remy!
          </button>
        ) : (
          <div>
            <button type="button" onClick={this.handleTalk}>
              Respond to Remy!
            </button>
            <p>
              (If you stop talking and want to talk with Remy again, make sure
              you re-click the button)
            </p>
          </div>
        )}
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
