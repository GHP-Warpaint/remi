import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDailyRecipe} from '../reducer/dailyRecipe'

class DailyRecipe extends Component {
  // constructor(){
  //   super()
  // }
  componentDidMount() {
    this.props.dailyRecipeInfo()
  }

  render() {
    console.log('DAILY RECIPE PROPS', this.props)
    console.log('dailyRecipeInfo', this.props.dailyRecipeInfo)
    return (
      <div>
        {/* <h1>Our Suggested Recipe of the Day!</h1>
        <h3>{}</h3>
        <img src={} />
        <p>Check out the recipe here: {}</p> */}
      </div>
    )
  }
}

const mapState = state => ({
  dailyRec: state.dailyRecipe
})

const mapDispatch = dispatch => ({
  dailyRecipeInfo: () => dispatch(getDailyRecipe())
})

export default connect(mapState, mapDispatch)(DailyRecipe)
