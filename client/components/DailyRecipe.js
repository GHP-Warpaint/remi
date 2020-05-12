import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDailyRecipe} from '../reducer/dailyRecipe'

class DailyRecipe extends Component {
  // constructor(){
  //   super()
  // }
  componentDidMount() {
    this.props.getDailyRecipeInfo()
  }

  render() {
    console.log('dailyRecipeInfo', this.props.dailyRec)
    return (
      <div>
        <h1>Our Suggested Recipe of the Day!</h1>
        {this.props.dailyRec.dailyRecipe
          ? this.props.dailyRec.dailyRecipe.map(recipe => {
              console.log('recipe', recipe)
              return (
                <div key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.imageUrl} height="300" />
                  <p>
                    Check out the recipe here: <br />{' '}
                    <a href={recipe.url}>{recipe.url}</a>
                  </p>
                </div>
              )
            })
          : 'loading...'}
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
