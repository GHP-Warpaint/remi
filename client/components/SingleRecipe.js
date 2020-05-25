import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchRecipeDirections} from '../reducer/recipe'
import {me, updateGroceryList} from '../reducer/user'
import {Link} from 'react-router-dom'

class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //savedRecipe: false
      checkedFoods: [],
      addMe: false,
      checked: false
    }
    //this.alert = this.alert.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //needs to get both the checkbox val and determine if the val is still checked before setting state
  handleChange(event) {
    console.log("I'm checking you out")
    console.log('event.target.value', event.target.value) //returns food item's name
    console.log('event.target', event.target)
    this.state.checkedFoods.push(event.target.value)

    this.setState({
      checked: event.target.checked
    })

    console.log('state', this.state)

    // if () {this.setState({
    //   checkedFoods: this.state.checkedFoods.push(event.target.value)
    // })}
  }

  //need to figure out how to get the name value from the selected & submitted missing ingredients checkbox
  handleSubmit = event => {
    event.preventDefault()
    const userId = this.props.user.id
    console.log('this.props', this.props)
    console.log('this.state', this.state)
    // const {addFood} = this.props
    //const food = this.state
    //this.props.addToList(userId, newFood)
  }

  // alert() {
  //   this.setState({
  //     savedRecipe: true
  //   })
  // }

  render() {
    if (!this.props.directions[0]) return <h1>loading</h1>

    const directions = this.props.directions[0].steps

    const name = this.props.history.location.recipeProps.name
    const imageURL = this.props.history.location.recipeProps.image
    const recipeId = this.props.history.location.recipeProps.recipeId
    const recipeArr = this.props.recipe.recipe.filter(recipe => {
      return recipe.id === recipeId
    })
    console.log('recipeArr', recipeArr)
    const usedIngredients = recipeArr[0].usedIngredients
    const missedIngredients = recipeArr[0].missedIngredients
    return (
      <div>
        <Link to="/recipes">Back to Recipes</Link>
        <h1>{name}</h1>
        {/* {!!this.state.savedRecipe && (
          <div className="alert">
            <span
              className="closebtn"
              // onClick={this.parentElement.style.display='none'}
            >
              &times;
            </span>
            <strong>Success!</strong> Recipe saved! Find it in My Account.
          </div>
        )}
        <button type="submit" onClick={this.alert}>
          Save This Recipe
        </button> */}
        <br />
        <br />
        <img src={imageURL} />
        <div className="ingredients">
          {usedIngredients.length ? (
            <div>
              <h2>Ingredients:</h2>
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
          {usedIngredients.length ? (
            usedIngredients.map(item => {
              return (
                <div key={item.id} className="cook-instructions">
                  <li>{item.name}</li>
                </div>
              )
            })
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
        <div className="missing-ingredients">
          {missedIngredients.length ? (
            <div>
              <h2>Ingredients Not in Fridge:</h2>
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            {missedIngredients.length ? (
              missedIngredients.map(item => {
                return (
                  <div key={item.id} className="cook-instructions">
                    <input
                      type="checkbox"
                      id={`${item.name}`}
                      checked={this.state.checked}
                      // name={`${item.name}`}
                      name="groceryItem"
                      value={`${item.name}`}
                      onChange={this.handleChange}
                    />
                    <label htmlFor={`${item.name}`}>{`${item.name}`}</label>
                  </div>
                )
              })
            ) : (
              <div>
                <br />
              </div>
            )}
            <div>
              <button type="submit">Add to Grocery List</button>
            </div>
          </form>
        </div>
        <div className="directions">
          <h2>Directions:</h2>
          {directions.map(step => {
            return (
              <div key={step.number} className="cook-instructions">
                <p>
                  {step.number}. {step.step}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    food: state.fridge.food,
    recipe: state.recipe,
    directions: state.recipe.directions,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchDirections: id => dispatch(fetchRecipeDirections(id)),
  addToList: (userId, groceryList) =>
    dispatch(updateGroceryList(userId, groceryList))
})

export default connect(mapState, mapDispatch)(SingleRecipe)
