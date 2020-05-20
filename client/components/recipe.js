import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipe, sendRecipe, fetchRecipeDirections} from '../reducer/recipe'
import {fetchFood} from '../reducer/fridge'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeFound: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.cookRecipe = this.cookRecipe.bind(this)
    this.keepRecipe = this.keepRecipe.bind(this)
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
  }

  keepRecipe() {
    this.setState({
      recipeFound: true
    })
  }

  render() {
    if (!this.props.recipe.length)
      return (
        <div>
          <br />
          <button type="button" onClick={this.handleClick}>
            Get my Recipe
          </button>
        </div>
      )

    return (
      <div id="recipe">
        <br />
        <h1>{this.props.recipe[0].title}</h1>
        <br />
        <img src={this.props.recipe[0].image} id="recipeImg" />
        <br />
        {!this.state.recipeFound ? (
          <button
            type="button"
            onClick={event => {
              this.cookRecipe(event)
              this.keepRecipe()
            }}
          >
            Cook this Recipe!
          </button>
        ) : (
          ''
        )}
        {this.props.directions.length && (
          <div>
            <br />
            <br />
            <h2>Directions:</h2>
          </div>
        )}
        {this.props.directions.length > 0 ? (
          this.props.directions[0].steps.map(steps => {
            return (
              <div key={steps.number} className="cook-instructions">
                <p>
                  {steps.number}. {steps.step}
                </p>
              </div>
            )
          })
        ) : (
          <div>
            <br />
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    food: state.fridge.food,
    recipe: state.recipe.recipe,
    directions: state.recipe.directions
  }
}

const mapDispatch = dispatch => ({
  fetchRecipe: ingredients => dispatch(fetchRecipe(ingredients)),
  fetchDirections: id => dispatch(fetchRecipeDirections(id)),
  sendRecipe: () => dispatch(sendRecipe()),
  fetchFood: () => dispatch(fetchFood())
})

export default connect(mapState, mapDispatch)(Recipe)
