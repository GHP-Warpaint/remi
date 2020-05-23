import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me, updateGroceryList} from '../reducer/user'

export class GroceryList extends Component {
  componentDidMount() {
    // this.props.me()
  }

  // removeListedItem = (id) => {
  //   this.props.dontNeedListedItem(id)
  // }

  render() {
    let user = this.props.user
    console.log('Grocery User', user)
    return (
      <div className="grocery-list">
        <h2>
          Grocery Shopping List{' '}
          {/* <i className="fa fa-download" aria-hidden="true" id="download" /> */}
        </h2>
        <div className="container">
          {/* going to map over shoppingList. if !shoppingList return "your grocery list is empty" */}
          <ul className="grocery-list-items">
            <li>apples</li>
            <li>
              <button
                className="groceryItemRemove"
                type="submit"
                // onClick={() => this.removeListedItem(ListedItem.id)}
              >
                &times;
              </button>
            </li>
          </ul>
          <ul className="grocery-list-items">
            <li>oranges</li>
            <li>&times;</li>
          </ul>
          <ul className="grocery-list-items">
            <li>yogurt</li>
            <li>
              <button
                className="groceryItemRemove"
                type="submit"
                // onClick={() => this.removeListedItem(ListedItem.id)}
              >
                &times;
              </button>
            </li>
          </ul>
          <ul className="grocery-list-items">
            <li>turmeric</li>
            <li>
              <button
                className="groceryItemRemove"
                type="submit"
                // onClick={() => this.removeListedItem(ListedItem.id)}
              >
                &times;
              </button>
            </li>
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

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    me: () => dispatch(me()),
    updateList: (userId, groceryList) =>
      dispatch(updateGroceryList(userId, groceryList))
  }
}

export default connect(mapState, mapDispatch)(GroceryList)
