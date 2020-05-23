import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me, updateGroceryList} from '../reducer/user'

class GroceryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //should equal an array of strings that the user currently has in their list
      groceryList: [...this.props.user.groceryList]
    }
  }

  //need to remove the identified string item from the arr of grocerylistitem strings
  handleRemoveListedItem = event => {
    const userId = this.props.user.id
    const findItem = this.state.groceryList.indexOf(event)
    this.state.groceryList.splice(findItem, 1)
    const newState = this.state.groceryList
    const groceryList = {groceryList: newState}
    this.props.updateList(userId, groceryList)
  }

  render() {
    let groceryList = this.props.user.groceryList
    // console.log('Grocery state', this.state)
    // console.log('PROPS', this.props)
    // console.log('Grocery PROPS', this.props.user.groceryList)
    return (
      <div className="grocery-list">
        <h2>
          Grocery Shopping List{' '}
          {/* <i className="fa fa-download" aria-hidden="true" id="download" /> */}
        </h2>
        <div className="container">
          {groceryList
            ? groceryList.map(item => (
                <ul key={item} className="grocery-list-items">
                  <li>{item}</li>
                  <li>
                    <button
                      className="groceryItemRemove"
                      type="submit"
                      onClick={() => this.handleRemoveListedItem(item)}
                    >
                      &times;
                    </button>
                  </li>
                </ul>
              ))
            : 'your grocery list is empty'}
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
