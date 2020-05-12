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
    return (
      <div>
        <h1>Our Suggested Recipe of the Day!</h1>
        {this.props.dailyRec.dailyRecipe
          ? this.props.dailyRec.dailyRecipe.map(recipe => {
              return (
                <div key={recipe.id}>
                  <h3>{recipe.title}</h3>
                  <img src={recipe.imageUrl} height="300" />
                  <p>
                    Check out the recipe <a href={recipe.url}>Here</a>
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
