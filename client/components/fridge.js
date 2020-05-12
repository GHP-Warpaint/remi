import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFood} from '../store/fridge'

/**
 * COMPONENT
 */
export class Fridge extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   food: [],
    // }
  }

  componentDidMount() {
    this.props.fetchFood()
    console.log(this.props)
    console.log('Comp did mount: ^^^^Props, vvvv State')
    console.log(this.state)
  }

  render() {
    console.log(this.props)
    console.log('Render: ^^^^Props, vvvv State')
    console.log(this.state)
    return (
      <div id="fridge">
        <h1>WELCOME TO THE FRIDGE!</h1>
        <div>
          {this.props.food &&
            this.props.food.map(food => (
              <div key={food.id} className="item">
                <img src={food.imageUrl} height="100px" width="auto" />
                {food.name}
              </div>
            ))}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    food: state.fridge.food
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFood: () => dispatch(fetchFood())
  }
}

export default connect(mapState, mapDispatch)(Fridge)
