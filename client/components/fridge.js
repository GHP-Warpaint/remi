import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchFood from '../reducer/fridge'
import AddFoodItem from './AddFoodItem'

/**
 * COMPONENT
 */
export class Fridge extends React.Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.fetchAllPuzzles()
  // }

  render() {
    return (
      <div>
        <h1>Welcome to the fridge!</h1>
        <AddFoodItem />
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    food: state.food.food
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFood: () => dispatch(fetchFood())
  }
}

export default connect(mapState, mapDispatch)(Fridge)
