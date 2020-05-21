import React from 'react'
import {connect} from 'react-redux'
import {me, updateEmail, updateName} from '../reducer/user'
import GroceryList from './GroceryList'
import SavedRecipes from './SavedRecipes'
//import {removeGroceryListItem, fetchGroceryList} from '../reducer/groceryList'

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
    this.handleSubmitName = this.handleSubmitName.bind(this)
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this)
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
    console.log('PROPS', this.props)
    console.log('STATE', this.state)
    const userId = this.props.user.id
    const {firstName, lastName} = {...this.state}
    const name = {firstName: firstName, lastName: lastName}
    this.props.updateName(userId, name)
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  handleSubmitEmail(event) {
    event.preventDefault()
    const userId = this.props.user.id
    console.log('STATE EMAIL', this.state.email)
    console.log('PROPS', this.props.updateEmail())
    const email = {email: this.state.email}
    this.props.updateEmail(userId, email)
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
        <h1>Welcome Back {user.firstName}!</h1>

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
                {this.state.emailClicked ? (
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
        <div className="my-acct-extras">
          {/* <SavedRecipes /> */}
          <GroceryList />
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
