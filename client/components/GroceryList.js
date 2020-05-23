import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me, updateGroceryList} from '../reducer/user'

class GroceryList extends Component {
  componentDidMount() {
    // this.props.me()
  }

  // removeListedItem = (id) => {
  //   this.props.dontNeedListedItem(id)
  // }

  render() {
    let groceryList = this.props.user.groceryList
    console.log('Grocery state', this.state)
    console.log('PROPS', this.props)
    console.log('Grocery PROPS', this.props.user.groceryList)
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
                      // onClick={() => this.removeListedItem(ListedItem.id)}
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
