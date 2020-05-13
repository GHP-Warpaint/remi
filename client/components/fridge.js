import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFood} from '../reducer/fridge'
import AddFoodItem from './AddFoodItem'

class Fridge extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.fetchFood()
  }

  render() {
    if (!this.props.food) return <h1>Loading</h1>

    return (
      <div id="fridge">
        <h1>WELCOME TO THE FRIDGE!</h1>
        <AddFoodItem />
        <div>
          {this.props.food &&
            this.props.food.map(food => (
              <div key={food.id} className="item">
                <img src={food.imageUrl} height="100px" width="auto" />
                {food.name}
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
    fetchFood: () => dispatch(fetchFood())
  }
}

export default connect(mapState, mapDispatch)(Fridge)
