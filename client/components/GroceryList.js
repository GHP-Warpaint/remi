import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class GroceryList extends Component {
  render() {
    return (
      <div className="grocery-list">
        <h2>Grocery Shopping List</h2>
        <div className="container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG4X7mrHe8dR_J3TbT8IVm_hZixJ8WN7EMZ6Yo14ljEcvK3uia&usqp=CAU"
            width="400px"
          />
          <ul className="grocery-list-items">
            <li>dummy &times;</li>
            <li>placeholder &times;</li>
            <li>words &times;</li>
            <li>personal &times;</li>
            <li>saved &times;</li>
            <li>food &times;</li>
            <li>items &times;</li>
            <li>will go &times;</li>
            <li>here &times;</li>
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
