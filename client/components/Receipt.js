import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Receipt extends Component {
  constructor() {
    super()
    this.state = {
      display: ''
    }
    this.counter = this.counter.bind(this)
  }

  counter() {
    let countDownDate = new Date('May 31, 2020 15:30:00').getTime()

    const countdownfunction = setInterval(() => {
      let rightNow = new Date().getTime()
      let difference = countDownDate - rightNow
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      if (difference < 0) {
        clearInterval(countdownfunction)
        this.setState({display: 'EXPIRED'})
      }

      this.setState({
        display: `${days}d ${hours}h ${minutes}m ${seconds}s`
      })
    }, 1000)
  }

  render() {
    this.counter()
    return (
      <div>
        <h2>Scan your Receipts Here!</h2>
        <h3>
          We'll return your itemized list for you and you can decide if you'd
          like to add the items to your fridge
        </h3>
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p id="countdown">{this.state.display}</p>
        </div>
        <p>
          Return to <Link to="/fridge">Fridge</Link>
        </p>
      </div>
    )
  }
}
