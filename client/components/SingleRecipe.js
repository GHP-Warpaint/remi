import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipeDirections} from '../reducer/recipe'

class SingleRecipe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.directions[0]) return <h1>loading </h1>

    const directions = this.props.directions[0].steps

    const name = this.props.history.location.recipeProps.name
    const imageURL = this.props.history.location.recipeProps.image

    return (
      <div>
        <h1>{name}</h1>
        <img src={imageURL} />
        {directions.map(step => {
          return (
            <p key={step.number}>
              {step.number}. {step.step}
            </p>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    food: state.fridge.food,
    recipe: state.recipe.recipe,
    directions: state.recipe.directions,
    recipe: state.recipe
  }
}

const mapDispatch = dispatch => ({
  fetchDirections: id => dispatch(fetchRecipeDirections(id))
})

export default connect(mapState, mapDispatch)(SingleRecipe)
