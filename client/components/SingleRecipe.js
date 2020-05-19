import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedRecipe: false
    }
    this.alert = this.alert.bind(this)
  }

  alert() {
    this.setState({
      savedRecipe: true
    })
  }

  render() {
    console.log('SINGLE RECIPE PROPS', this.props)
    const {
      directions,
      image,
      missedIngredients,
      title,
      usedIngredients
    } = this.props
    return (
      <div>
        <Link to="/recipes">Back to Recipes</Link>
        <h1>{title}</h1>
        {!!this.state.savedRecipe && (
          <div className="alert">
            <span className="closebtn">&times;</span>
            <strong>Success!</strong> Recipe saved! Find it in My Account.
          </div>
          // <div className="alert">
          //   <span className="closebtn" onClick={this.parentElement.style.display='none'}>&times;</span>
          //   <strong>Success!</strong> Recipe saved! Find it in My Account.
          // </div>
        )}
        <button type="submit" onClick={this.alert}>
          Save This Recipe
        </button>
        <img src={image} />
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
          <form>
            {missedIngredients.length ? (
              missedIngredients.map(item => {
                return (
                  <div key={item.id} className="cook-instructions">
                    <input
                      type="checkbox"
                      id={`${item.name}`}
                      name={`${item.name}`}
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
            <input type="submit" value="Add to Grocery List" />
          </form>
        </div>
        <div className="directions">
          {directions.length ? (
            <div>
              <br />
              <br />
              <h2>Directions:</h2>
            </div>
          ) : (
            <div>
              <br />
            </div>
          )}
          {directions.length ? (
            directions[0].steps.map(steps => {
              return (
                <div key={steps.number} className="cook-instructions">
                  <p>
                    {steps.number}. {steps.step}
                  </p>
                </div>
              )
            })
          ) : (
            <div>
              <br />
            </div>
          )}
        </div>
      </div>
    )
  }
}
