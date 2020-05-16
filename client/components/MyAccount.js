import React from 'react'
import {connect} from 'react-redux'
import {me} from '../reducer/user'
import {updateEmail} from '../reducer/user'
import {updateName} from '../reducer/user'

export class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameClicked: false,
      emailClicked: false,
      firstName: '',
      lastName: '',
      email: ''
    }
    this.toggleName = this.toggleName.bind(this)
    this.toggleEmail = this.toggleEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.me()
  }

  toggleName(event) {
    return this.setState({
      nameClicked: !this.state.nameClicked
    })
  }

  toggleEmail(event) {
    return this.setState({
      emailClicked: !this.state.emailClicked
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitName(event) {
    event.preventDefault()
    const userId = this.props.userId
    let name = ({firstName, lastName} = {...this.state})
    this.props.updateUserName(userId, name)
    this.setState({
      firstName: ' ',
      lastName: ' '
    })
  }

  handleSubmitEmail(event) {
    event.preventDefault()
    const userId = this.props.userId
    this.props.updateUserEmail(userId, this.state.email)
    this.setState({
      email: ''
    })
  }

  render() {
    let user = this.props.user
    const {firstName, lastName, email} = this.state
    return (
      <div id="myAccount">
        <br />
        <h2>Welcome Back {user.firstName}!</h2>

        <div>
          {user && (
            <div key={user.id}>
              <br />
              <h2 className="acct-details">
                <div>Name</div>{' '}
                <div>
                  {user.firstName} {user.lastName}
                </div>{' '}
                <button
                  type="button"
                  onClick={this.toggleName}
                  className="edit"
                >
                  Edit
                </button>
                {this.state.nameClicked ? (
                  <form onSubmit={this.handleSubmitName}>
                    <label>
                      First Name:
                      <input
                        type="text"
                        name="firstName"
                        onChange={this.handleChange}
                        value={firstName}
                        className="field"
                      />
                    </label>
                    <br />

                    <label>
                      Last Name:
                      <input
                        type="text"
                        name="lastName"
                        onChange={this.handleChange}
                        value={lastName}
                        className="field"
                      />
                    </label>

                    <button type="submit">Update</button>
                  </form>
                ) : null}
              </h2>
              <h2 className="acct-details">
                <div>Email</div> <div>{user.email}</div>{' '}
                <button
                  type="button"
                  onClick={this.toggleEmail}
                  className="edit"
                >
                  Edit
                </button>
                {this.state.nameClicked ? (
                  <form onSubmit={this.handleSubmitEmail}>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={email}
                        className="field"
                      />
                    </label>

                    <button type="submit">Update</button>
                  </form>
                ) : null}
              </h2>
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
    me: () => dispatch(me()),
    updateName: (userId, name) => dispatch(updateName(userId, name)),
    updateEmail: (userId, email) => dispatch(updateEmail(userId, email))
  }
}

export default connect(mapState, mapDispatch)(MyAccount)
