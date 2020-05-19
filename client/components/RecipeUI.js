import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
//import {addGroceryListItem} from '../reducer/groceryList'
import {fetchRecipeDirections} from '../reducer/recipe'

class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //savedRecipe: false
      //selectedFoods:  (not sure if I can put selected & submitted name vals on state)
    }
    //this.alert = this.alert.bind(this)
    //this.handleSubmit = this.handleSubmit.bind(this)
    this.cookRecipe = this.cookRecipe.bind(this)
  }

  async cookRecipe(id) {
    event.preventDefault()
    await this.props.fetchDirections(id)
  }

  //need to figure out how to get the name value (and maybe id) from the selected & submitted missing ingredients checkbox
  // handleSubmit = async event => {
  //   event.preventDefault()
  //   const {addFood} = this.props
  //   const food = this.state
  //   await addToList(food)
  // }

  // alert() {
  //   this.setState({
  //     savedRecipe: true
  //   })
  // }

  render() {
    const {id, title, image} = this.props
    return (
      <div>
        <div className="recipe-card">
          <h2>{title}</h2>
          <img src={image} />
        </div>
        <Link
          to={{
            pathname: '/SingleRecipe',
            recipeProps: {
              name: title,
              image: image,
              recipeId: id
            }
          }}
          onClick={() => {
            this.cookRecipe(id)
          }}
        >
          Cook this Recipe!
        </Link>
      </div>
    )

    // console.log('SINGLE RECIPE PROPS', this.props)
    // const {
    //   directions,
    //   image,
    //   missedIngredients,
    //   title,
    //   usedIngredients
    // } = this.props
    // return (
    //   <div>
    //     <Link to="/recipes">Back to Recipes</Link>
    //     <h1>{title}</h1>
    //     {!!this.state.savedRecipe && (
    //       <div className="alert">
    //         <span className="closebtn">&times;</span>
    //         <strong>Success!</strong> Recipe saved! Find it in My Account.
    //       </div>
    //       // <div className="alert">
    //       //   <span className="closebtn" onClick={this.parentElement.style.display='none'}>&times;</span>
    //       //   <strong>Success!</strong> Recipe saved! Find it in My Account.
    //       // </div>
    //     )}
    //     <button type="submit" onClick={this.alert}>
    //       Save This Recipe
    //     </button>
    //     <img src={image} />
    //     <div className="ingredients">
    //       {usedIngredients.length ? (
    //         <div>
    //           <h2>Ingredients:</h2>
    //         </div>
    //       ) : (
    //         <div>
    //           <br />
    //         </div>
    //       )}
    //       {usedIngredients.length ? (
    //         usedIngredients.map(item => {
    //           return (
    //             <div key={item.id} className="cook-instructions">
    //               <li>{item.name}</li>
    //             </div>
    //           )
    //         })
    //       ) : (
    //         <div>
    //           <br />
    //         </div>
    //       )}
    //     </div>
    //     <div className="missing-ingredients">
    //       {missedIngredients.length ? (
    //         <div>
    //           <h2>Ingredients Not in Fridge:</h2>
    //         </div>
    //       ) : (
    //         <div>
    //           <br />
    //         </div>
    //       )}
    //       <form onSubmit={this.handleSubmit}>
    //         {missedIngredients.length ? (
    //           missedIngredients.map(item => {
    //             return (
    //               <div key={item.id} className="cook-instructions">
    //                 <input
    //                   type="checkbox"
    //                   id={`${item.name}`}
    //                   name={`${item.name}`}
    //                 />
    //                 <label htmlFor={`${item.name}`}>{`${item.name}`}</label>
    //               </div>
    //             )
    //           })
    //         ) : (
    //           <div>
    //             <br />
    //           </div>
    //         )}
    //         <input type="submit" value="Add to Grocery List" />
    //       </form>
    //     </div>
    //     <div className="directions">
    //       {directions.length ? (
    //         <div>
    //           <br />
    //           <br />
    //           <h2>Directions:</h2>
    //         </div>
    //       ) : (
    //         <div>
    //           <br />
    //         </div>
    //       )}
    //       {directions.length ? (
    //         directions[0].steps.map(steps => {
    //           return (
    //             <div key={steps.number} className="cook-instructions">
    //               <p>
    //                 {steps.number}. {steps.step}
    //               </p>
    //             </div>
    //           )
    //         })
    //       ) : (
    //         <div>
    //           <br />
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //)
  }
}

const mapState = state => ({
  recipe: state.recipe,
  directions: state.recipe.directions
  //shoppingList: state.groceryList
})

const mapDispatch = dispatch => ({
  //addToList: () => dispatch(addGroceryListItem()),
  fetchDirections: id => dispatch(fetchRecipeDirections(id))
})

export default connect(mapState, mapDispatch)(SingleRecipe)
