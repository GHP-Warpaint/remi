import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchRecipe, sendRecipe} from '../store/recipe'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      imgUrl: '',
      steps: [],
      ingredients: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    //some other things that I haven't figured out to send this to alexa
  }
  render() {
    return (
      <div id="recipe">
        <h1>{this.state.title}</h1>

        <img src={this.state.imgUrl} id="recipeImg" />

        <div id="ingredients">
          {this.state.ingredients.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>

        <div id="steps">
          {this.state.steps.map((step, index) => (
            <div key={step}>
              {index}
              {step}
            </div>
          ))}
        </div>
        <button type="submit" onSubmit={this.handleSubmit}>
          Send to Alexa
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {recipe: state.recipe}
}

const mapDispatch = dispatch => ({
  fetchRecipe: () => dispatch(fetchRecipe()),
  sendRecipe: () => dispatch(sendRecipe())
})

export default connect(mapState, mapDispatch)(Recipe)
