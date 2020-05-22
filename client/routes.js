import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, Fridge, MyAccount} from './components'
import AlexaInstruct from './components/AlexaGuide'
import Welcome from './components/Welcome'
import Receipt from './components/Receipt'
import SingleRecipe from './components/SingleRecipe'
import ErrorPage from './components/ErrorPage'
import DailyRecipe from './components/DailyRecipe'
import Recipe from './components/recipe'
import {me} from './store'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div id="main">
        <br />
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Route path="/about-alexa" component={AlexaInstruct} />

          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/account" component={MyAccount} />
              <Route path="/home" component={DailyRecipe} />
              <Route path="/recipes" component={Recipe} />
              <Route path="/singleRecipe" component={SingleRecipe} />
              <Route path="/fridge" component={Fridge} />
              <Route path="/receipt" component={Receipt} />
              <Route component={ErrorPage} />
            </Switch>
          )}
          {/* Displays our Login component as a fallback */}
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
