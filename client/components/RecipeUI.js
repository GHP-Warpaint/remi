import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchRecipeDirections} from '../reducer/recipe'

class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.cookRecipe = this.cookRecipe.bind(this)
  }

  async cookRecipe(id) {
    event.preventDefault()
    await this.props.fetchDirections(id)
  }

  render() {
    const {id, title, image} = this.props
    return (
      <div>
        <div className="recipe-card">
          <h2>{title}</h2>
          <img src={image} />
        </div>
        <Link
          to={{
            pathname: '/SingleRecipe',
            recipeProps: {
              name: title,
              image: image,
              recipeId: id
            }
          }}
          onClick={() => {
            this.cookRecipe(id)
          }}
        >
          Cook this Recipe!
        </Link>
      </div>
    )
  }
}

const mapState = state => ({
  recipe: state.recipe,
  directions: state.recipe.directions
})

const mapDispatch = dispatch => ({
  fetchDirections: id => dispatch(fetchRecipeDirections(id))
})

export default connect(mapState, mapDispatch)(SingleRecipe)
