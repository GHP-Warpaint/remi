import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDailyRecipe} from '../reducer/dailyRecipe'

class DailyRecipe extends Component {
  componentDidMount() {
    this.props.getDailyRecipeInfo()
  }

  render() {
    const randomNum =
      this.props.dailyRec.dailyRecipe.length &&
      Math.floor(Math.random() * this.props.dailyRec.dailyRecipe.length)
    const randomChoice = this.props.dailyRec.dailyRecipe[1]
      ? this.props.dailyRec.dailyRecipe[randomNum]
      : 'loads'
    return (
      <div>
        <h1>Our Suggested Recipe of the Day!</h1>
        {randomChoice !== 'loads' && (
          <div>
            <h3>{randomChoice.title}</h3>
            <img src={randomChoice.imageUrl} height="300" />
            <p>
              Check out the recipe{' '}
              <a
                href={randomChoice.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Here
              </a>
            </p>
          </div>
        )}
        {/* the following returns a list of all available daily recipes */}
        {/* {this.props.dailyRec.dailyRecipe
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
          : 'loading...'} */}
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
