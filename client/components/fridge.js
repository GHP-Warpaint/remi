import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddFoodItem from './AddFoodItem'
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
    console.log('in render, this. props >>>>>>>>>', this.props)
    return (
      <div id="fridge">
        <br />
        <h1>WELCOME TO THE FRIDGE!</h1>
        <div>
          <div>
            <br />
            <AddFoodItem />
            <br />
            <Link to="/recipe" className="fakeButton">
              <br />
              Let's Cook!
            </Link>
            {/* <button type="button" onClick={() => history.push('/recipe')}>
              Let's Cook!
            </button> */}
          </div>
          <br />
          {this.props.food &&
            this.props.food.map(food => (
              <div key={food.id} className="item">
                <button
                  className="itemBtn"
                  type="submit"
                  onClick={() => this.removeFood(food.id)}
                >
                  X
                </button>
                <img src={food.imageUrl} height="100px" width="auto" />
                <br />
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
    fetchFood: () => dispatch(fetchFood()),
    deleteFood: id => dispatch(deleteFood(id))
  }
}

export default connect(mapState, mapDispatch)(Fridge)
