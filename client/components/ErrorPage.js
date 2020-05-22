import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <img
          src="https://ngc0228.files.wordpress.com/2007/09/ratatouille.gif"
          alt="ratatouille rat error"
        />

        <h2>
          Oh no! Looks like this page doesn't exist or is unavailable. Click{' '}
          <NavLink to="/"> here </NavLink> to return to the home page
        </h2>
      </div>
    )
  }
}

export default ErrorPage
