import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class SavedRecipes extends Component {
  render() {
    return (
      <div>
        <h2 className="saved-recipes">Saved Recipes</h2>
        <div className="saved-scroll">
          <ul className="saved-recipes-items">
            <li>Mac and Cheese</li>
            <li>Roti and Curry</li>
            <li>Sausage and Eggs</li>
            <li>JS and Python</li>
            <li>Apples and Pears</li>
            <li>Google and Amazon</li>
            <li>Ben and Jerry</li>
            <li>Tom and Jerry</li>
            <li>Chocolate and Vanilla</li>
            <li>pb and J</li>
            <li>Blanket and Pillow</li>
            <li>Cranberry and Brie</li>
            <li>Nuts and Granola</li>
            <li>Hot Chocolate and Whipped Cream</li>
            <li>Vitamins and Minerals</li>
          </ul>
        </div>
      </div>
    )
  }
}

// const mapState = (state) => ({

// })

// const mapDispatch = (dispatch) => ({

// })

// export default connect(mapState, mapDispatch)(SavedRecipes)
