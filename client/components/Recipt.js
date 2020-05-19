import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddFoodItem from './AddFoodItem'
import {fetchFood, deleteFood} from '../reducer/fridge'
import axios from 'axios'
import Tesseract from 'tesseract.js'

/**
 * COMPONENT
 */
class Recipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: [],
      patterns: [],
      documents: []
    }
  }

  handleChange = event => {
    if (event.target.files[0]) {
      var uploads = []
      for (var key in event.target.files) {
        if (!event.target.files.hasOwnProperty(key)) continue
        let upload = event.target.files[key]
      }
      this.setState({uploads: uploads})
    } else {
      this.setState({uploads: []})
    }
  }

  render() {
    return (
      <div>
        <h1>Please Upload Your Recipt</h1>
        <label className="fileUploadContianer">
          <input type="file" id="fileUploader" multiple />
        </label>
        <div id="previews">
          {this.state.uploads.map((value, index) => {
            return <img key={index} src={value} width="100px" />
          })}
        </div>
        <button className="button">Generate</button>
        <section id="resultsSection">
          <div id="results">
            <div className="results__result__image">
              <img width="250px" />
            </div>
            <div className="results__result__info">
              <div className="results__result__info__codes">
                <small>{/* Confidence score */}</small>
              </div>
              <div className="results__result__info__codes">
                <small>{/* Pattern output */}</small>
              </div>
              <div className="results__result__info__text">
                <small>{/* Full output */}</small>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
