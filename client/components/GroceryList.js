import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
        <h2>Grocery Shopping List</h2>
        <div className="container">
          <ul className="grocery-list-items">
            <li>dummy</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>placeholder</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>proof-of-concept</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>in future</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>mapping</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>over</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>food Names</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>Is Necessary</li>
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
