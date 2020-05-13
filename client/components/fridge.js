import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFood, deleteFood} from '../reducer/fridge'

/**
 * COMPONENT
 */
export class Fridge extends React.Component {
  constructor(props) {
    super(props)
    this.removeFood = this.removeFood.bind(this)
  }

  componentDidMount() {
    this.props.fetchFood()
  }

  removeFood(id) {
    this.props.deleteFood(id)
  }

  render() {
    return (
      <div id="fridge">
        <h1>WELCOME TO THE FRIDGE!</h1>
        {/* <AddFoodItem /> */}
        <div>
          {this.props.food &&
            this.props.food.map(food => (
              <div key={food.id} className="item">
                <img src={food.imageUrl} height="100px" width="auto" />
                {food.name}
                <button onClick={() => this.removeFood(food.id)}> X</button>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    food: state.fridge.food
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFood: () => dispatch(fetchFood()),
    deleteFood: id => dispatch(deleteFood(id))
  }
}

export default connect(mapState, mapDispatch)(Fridge)
