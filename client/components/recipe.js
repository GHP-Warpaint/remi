import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipe, sendRecipe, fetchRecipeDirections} from '../reducer/recipe'
import {fetchFood} from '../reducer/fridge'
import RecipeUI from './RecipeUI'
import {Link} from 'react-router-dom'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
    this.cookRecipe = this.cookRecipe.bind(this)
  }

  componentDidMount() {
    this.props.fetchFood()
    //console.log('CHECKING RECIPE ID', this.props.match.params)
  }

  handleClick(event) {
    event.preventDefault()
    const ingredients = this.props.food.map(foodItem => {
      return foodItem.name
    })
    this.props.fetchRecipe(ingredients)
  }

  cookRecipe(id) {
    event.preventDefault()
    console.log('event', event.target)
    console.log('id', id)
    //const id = this.props.recipe[0].id
    this.props.fetchDirections(id)
  }

  render() {
    //console.log('LIST OF RECIPES=>', this.props.recipe)

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
      <div className="recipes-container">
        {this.props.recipe.map(recipe => {
          return (
            <RecipeUI
              key={recipe.id}
              image={recipe.image}
              id={recipe.id}
              missedIngredients={recipe.missedIngredients}
              title={recipe.title}
              usedIngredients={recipe.usedIngredients}
              directions={this.props.directions}
            />
          )
        })}

        {/* {this.props.recipe.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} /> */}
        {/* <Link to ='/SingleRecipe'
              onClick={() => {
                this.cookRecipe(recipe.id)
              }}
            >
              Cook this Recipe!
            </Link> */}
        {/* <SingleRecipe
              image={recipe.image}
              missedIngredients={recipe.missedIngredients}
              title={recipe.title}
              usedIngredients={recipe.usedIngredients}
              directions={this.props.directions}
            /> */}
        {/* </div>
        ))} */}
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
