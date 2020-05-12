import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      imgUrl: '',
      steps: [],
      ingredients: []
    }
  }

  render() {
    return (
      <div id="recipe">
        <h1>{this.title}</h1>

        <img src={this.imgUrl} id="recipeImg" />

        <div id="ingredients">
          {this.ingredients.map(item => <div key={item.name}>{item.name}</div>)}
        </div>

        <div id="steps">
          {this.ingredients.map((step, index) => (
            <div key={step}>
              {index}
              {step}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {recipe: state.recipe}
}

const mapDispatch = dispatch => {
  //fill in after store is built
}

export default connect(mapState, mapDispatch)(Recipe)
