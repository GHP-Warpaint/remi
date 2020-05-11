import React from 'react'
import {connect} from 'react-redux'
import {addFoodToFridge} from '../reducer/fridge'

class AddFoodItem extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = async event => {}

  render() {
    return (
      <div>
        <form>
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

export default AddFoodItem
