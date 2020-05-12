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
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    event.preventDefault()
    console.log('RECIPE PROPS=>', this.props)
    this.props.fetchRecipe()
  }
  render() {
    //props = fridge ingredients
    //onclick, send ingredients to api, recipe must include fridge ingredients
    return (
      <div id="recipe">
        <button type="button" onClick={this.handleClick}>
          Get my Recipe
        </button>
        {/* <h1>{this.props.title}</h1>

        <img src={this.props.imgUrl} id="recipeImg" />

        <div id="ingredients">
          {this.props.ingredients.map(item => (
            <div key={item.name}>{item.name}</div>
          ))}
        </div>

        <div id="steps">
          {this.props.steps.map((step, index) => (
            <div key={step}>
              {index}
              {step}
            </div>
          ))}
        </div> */}
      </div>
    )
  }
}

const mapState = state => {
  return {fridgeItems: state.items} //an array of items
}

const mapDispatch = dispatch => ({
  fetchRecipe: () => dispatch(fetchRecipe()),
  sendRecipe: () => dispatch(sendRecipe())
})

export default connect(mapState, mapDispatch)(Recipe)
