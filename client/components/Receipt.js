import React, {Component} from 'react'

export default class Receipt extends Component {
  render() {
    return (
      <div>
        <h2>Scan your Receipts Here!</h2>
        <h3>
          We'll return your itemized list for you and you can decide if you'd
          like to add the items to your fridge
        </h3>
        <form action="/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="avatar" />
          <button type="submit">Convert</button>
        </form>
      </div>
    )
  }
}
