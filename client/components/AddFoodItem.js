import React from 'react'
import {connect} from 'react-redux'
import {fetchFood, addFoodItem} from '../reducer/fridge'
import {fetchFoodItems} from '../reducer/foodItems'

class AddFoodItem extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.ingredientsList()
    console.log('COMPON DID MT', this.props)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value.toLowerCase()
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {addFood} = this.props
    const food = this.state
    await addFood(food)
    this.setState({name: ''})
  }

  render() {
    const {ingredients} = this.props
    const {inventory} = ingredients
    console.log('DDECONSTRUCTED INGREDIENTS', inventory)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>Add Food Item</label> */}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            list="ingredients"
            className="field"
          />

          <datalist id="ingredients">
            {inventory &&
              inventory.map(ingredient => (
                <option key={ingredient.id} value={ingredient.name} />
              ))}
          </datalist>

          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    ingredients: state.inventory
  }
}

const mapDispatch = dispatch => {
  return {
    addFood: foodName => dispatch(addFoodItem(foodName)),
    fetchFood: () => dispatch(fetchFood()),
    ingredientsList: () => dispatch(fetchFoodItems())
  }
}

export default connect(mapState, mapDispatch)(AddFoodItem)
