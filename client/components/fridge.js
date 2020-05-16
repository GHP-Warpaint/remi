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
        <i
          className="fa fa-question-circle-o"
          id="help-icon"
          aria-hidden="true"
        >
          <span className="tooltiptext">
            <button type="button" className="voice-help">
              Click for Audio
            </button>
            <br />Type and add the foods you currently have available in your
            kitchen. When you're done head over to the Recipes by clicking the
            Let's Cook button or select Recipe in the nav bar.
          </span>
        </i>
        <div>
          <div>
            <br />
            <AddFoodItem />
            <br />
            <div className="fridge-links">
              <Link to="/receipt" className="fakeButton">
                Scan my receipt!
              </Link>
              <Link to="/recipe" className="fakeButton">
                Let's Cook!
              </Link>
            </div>
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
