import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import fetchFood from '../store/fridge'

/**
 * COMPONENT
 */
export class Fridge extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFood()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>WELCOME TO THE FRIDGE!</h1>
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
