import React from 'react'
import {connect} from 'react-redux'
// import { addFoodToFridge} from '../reducer/fridge'
import {getFoodItem, addFoodItemToFridge} from '../reducer/foodItems'

class AddFoodItem extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {addFood} = this.props
    const food = this.state
    await addFood(food)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Food Item</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getFood: foodName => dispatch(getFoodItem(foodName)),
    addFood: foodName => dispatch(addFoodItemToFridge(foodName))
  }
}

export default connect(mapState, mapDispatch)(AddFoodItem)