import React from 'react'
import {connect} from 'react-redux'
import {me} from '../reducer/user'

export class MyAccount extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.me()
  }
  render() {
    let user = this.props.user
    return (
      <div id="myAccount">
        <br />
        <h2>Welcome Back {user.firstName}!</h2>

        <div>
          {user && (
            <div key={user.id}>
              <br />
              <h2>
                Name: {user.firstName} {user.lastName}
              </h2>
              <br />
              <h2>Email: {user.email}</h2>
            </div>
          )}
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
    me: () => dispatch(me())
  }
}

export default connect(mapState, mapDispatch)(MyAccount)
