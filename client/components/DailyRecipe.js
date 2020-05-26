import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDailyRecipe} from '../reducer/dailyRecipe'
import Loader from 'react-loader-spinner'

let recognition
if (window.speechRecognition || window.webkitSpeechRecognition) {
  const SpeechRecognition =
    window.speechRecognition || window.webkitSpeechRecognition
  recognition = new SpeechRecognition()

  recognition.onstart = function() {
    console.log('voice is activated, you can speak to the microphone')
  }

  recognition.onresult = function(evt) {
    const transcript = evt.results[0][0].transcript
    console.log('WHAT YOU SAID=>', transcript)
    readOutLoud(transcript)
  }
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
    location.assign('https://chef-remy.herokuapp.com/recipes')
    speech.text = 'brilliant! Click the button to see what we can create.'
  } else if (message.includes('home')) {
    location.assign('https://chef-remy.herokuapp.com/home')
    speech.text = "Excellent! We're back at our lovely home."
  } else if (message.includes('Alexa')) {
    location.assign('https://chef-remy.herokuapp.com/about-alexa')
    speech.text = 'Smashing! Presenting my dear friend, Alexa.'
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
      'Welcome to the home of Chef Remy. Would you like to add some food to your fridge, update your account details, or generate a new recipe?'
    )
    msg.lang = 'en-GB'
    window.speechSynthesis.speak(msg)
  }

  letThemTalk = () => {
    this.setState({
      clickedChat: true
    })
  }

  timer = () => {
    setTimeout(this.letThemTalk, 4000)
  }

  handleTalk = () => {
    recognition.start()
  }

  render() {
    const {recipe, isLoading} = this.props

    if (isLoading)
      return <Loader type="Circles" color="#00BFFF" height={80} width={80} />

    return (
      <div>
        <br />
        <h1>Our Suggested Recipes of the Day!</h1>
        <br />
        <div>
          <h3>{recipe.title}</h3>
          <img src={recipe.imageUrl} height="300" alt="recipe of the day" />
          <p>
            Check out the recipe at{' '}
            <a href={recipe.url} rel="noopener noreferrer" target="_blank">
              Food Network
            </a>
          </p>
        </div>
        <br />
        {window.speechRecognition || window.webkitSpeechRecognition ? (
          <div id="remy">
            <div>
              <h2>New to Chef Remy</h2>
              <p>
                Have an Amazon Alexa enabled device? <br />
                Find us in your skill store! <br />
                Don’t want to use Alexa? That's fine too! <br /> We recommend
                talking to Chef Remy on our site. <br /> To get started, find
                the button that says "Chat with Remy!"
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
                Chat with Remy!{' '}
                <i className="fa fa-volume-up" aria-hidden="true" />
              </button>
            ) : (
              <div>
                <button type="button" onClick={this.handleTalk}>
                  Respond to Remy!{' '}
                  <i className="fa fa-microphone" aria-hidden="true" />
                </button>
                <p>
                  (If you stop talking and want to talk with Remy again, make
                  sure you re-click the button)
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>Look for our Alexa Skill in the Alexa App!</div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  recipe: state.dailyRecipe.dailyRecipe,
  isLoading: state.dailyRecipe.isLoading
})

const mapDispatch = dispatch => ({
  getDailyRecipeInfo: () => dispatch(getDailyRecipe())
})

export default connect(mapState, mapDispatch)(DailyRecipe)
