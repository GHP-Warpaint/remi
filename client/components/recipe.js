import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {fetchRecipe, sendRecipe, fetchRecipeDirections} from '../reducer/recipe'
import {fetchFood} from '../reducer/fridge'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.cookRecipe = this.cookRecipe.bind(this)
  }

  componentDidMount() {
    this.props.fetchFood()
  }

  handleClick(event) {
    event.preventDefault()
    const ingredients = this.props.food.map(foodItem => {
      return foodItem.name
    })
    this.props.fetchRecipe(ingredients)
  }

  cookRecipe(event) {
    event.preventDefault()
    const id = this.props.recipe[0].id
    this.props.fetchDirections(id)
    console.log('RECIPE PROPS', this.props)
  }

  render() {
    if (!this.props.recipe.length)
      return (
        <div>
          <button type="button" onClick={this.handleClick}>
            Get my Recipe
          </button>
        </div>
      )

    return (
      <div id="recipe">
        <h1>{this.props.recipe[0].title}</h1>
        <img src={this.props.recipe[0].image} id="recipeImg" />
        <button type="button" onClick={this.cookRecipe}>
          Cook this Recipe!
        </button>

        {this.props.directions.length
          ? this.props.directions[0].steps.map(steps => {
              console.log(steps)
              return <p key={steps.number}>{steps.step}</p>
            })
          : 'loading'}

        {/*

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
  return {
    food: state.fridge.food,
    recipe: state.recipe.recipe,
    directions: state.recipe.directions
  } //an array of items
}

const mapDispatch = dispatch => ({
  fetchRecipe: ingredients => dispatch(fetchRecipe(ingredients)),
  fetchDirections: id => dispatch(fetchRecipeDirections(id)),
  sendRecipe: () => dispatch(sendRecipe()),
  fetchFood: () => dispatch(fetchFood())
})

export default connect(mapState, mapDispatch)(Recipe)
