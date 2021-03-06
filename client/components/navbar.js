import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

// function respondTag() {
//   var x = document.getElementById('myTopnav')
//   if (x.className === 'topnav') {
//     x.className += ' responsive'
//   } else {
//     x.className = 'topnav'
//   }
// }

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="head">
    <Link to="/">
      <h1>
        <img
          className="headlinerImg"
          src="./ChefHat.png"
          width="40"
          alt="chef hat logo"
        />{' '}
        Chef Remy
      </h1>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <div className="topnav" id="myTopnav">
            <Link to="/home">Home</Link>
            <Link to="/fridge">Fridge</Link>
            <Link to="/receipt">Add Receipt</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/about-alexa">Alexa</Link>
            <Link to="/account">My Account</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
            <a
              href=""
              className="icon"
              onClick={e => {
                e.preventDefault()
                let x = document.getElementById('myTopnav')
                x.className === 'topnav'
                  ? (x.className += ' responsive')
                  : (x.className = 'topnav')
              }}
            >
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/home">Home</Link> */}
          {/* <Link to="/recipe">Recipe</Link> */}
          <Link to="/about-alexa">Alexa</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
