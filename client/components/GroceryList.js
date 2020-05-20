import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
        <h2>
          Grocery Shopping List{' '}
          <i className="fa fa-download" aria-hidden="true" id="download" />
        </h2>
        <div className="container">
          <ul className="grocery-list-items">
            <li>apples</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>oranges</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>yogurt</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>turmeric</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>heavy cream</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>barley</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>chives</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>tortilla</li>
            <li>&times;</li>
          </ul>
        </div>
      </div>
    )
  }
}

// const mapState = state => {
//   return {
//     shoppingList: state.groceryList
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     seeGroceryList: () => dispatch(fetchGroceryList())
//     dontNeedListedItem: (id) => dispactch(removeGroceryListItem(id))
//   }
// }

// export default connect(mapState, mapDispatch)(MyAccount)
