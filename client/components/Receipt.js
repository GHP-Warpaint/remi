import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import AddFoodItem from './AddFoodItem'
// import {fetchFood, deleteFood} from '../reducer/fridge'
// import axios from 'axios'
import tesseract from 'tesseract.js'
import {createWorker} from 'tesseract.js'

/**
 * COMPONENT
 */
class Receipt extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: [],
      patterns: [],
      documents: []
    }
    //this.generateText = this.generateText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getTextFromImage = this.getTextFromImage.bind(this)
  }

  handleChange(e) {
    // if (event.target.files[0]) {
    //   var uploads = []
    //   for (var key in event.target.files) {
    //     if (!event.target.files.hasOwnProperty(key)) continue
    //     let upload = event.target.files[key]
    //     uploads.push(URL.createObjectURL(upload))
    //   }
    //   this.setState({uploads: uploads})
    // } else {
    //   this.setState({uploads: []})
    // }
    console.log(this.state)
    let file = Array.from(e.target.files)
    let fileObj = file[0]
    const newUploads = []
    newUploads.push(URL.createObjectURL(fileObj))
    console.log('uploads', newUploads)
    this.setState({uploads: newUploads})
    console.log(this.state)
  }

  async getTextFromImage() {
    const worker = createWorker()
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    console.log('state uploads', this.state.uploads[0])
    const {data: {text}} = await worker.recognize(this.state.uploads[0])
    await worker.terminate()
    console.log(text)
    //return text
  }

  // generateText() {
  //   console.log(this.state)
  //   let uploads = this.state.uploads
  //   for (var i = 0; i < uploads.length; i++) {
  //     tesseract.recognize(uploads[i], {
  //       lang: 'eng'
  //     })
  //       .catch(err => {
  //         console.error(err)
  //       })
  //       .then(result => {
  //         // Get Confidence score
  //         let confidence = result.confidence

  //         // Get full output
  //         let text = result.text

  //         // // Get codes
  //         // let pattern = /\b\w{10,10}\b/g
  //         // let patterns = result.text.match(pattern)

  //         // Update state
  //         this.setState({
  //           patterns: this.state.patterns.concat(patterns),
  //           documents: this.state.documents.concat({
  //             pattern: patterns,
  //             text: text,
  //             confidence: confidence
  //           })
  //         })
  //       })
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Please Upload Your Recipt</h1>
        <section>
          <label className="fileUploadContianer">
            <input
              type="file"
              id="fileUploader"
              onChange={this.handleChange}
              multiple
            />
          </label>
          <div id="previews">
            {this.state.uploads.map((value, index) => {
              return <img key={index} src={value} width="100px" />
            })}
          </div>
          <button
            type="submit"
            className="button"
            onClick={this.getTextFromImage}
          >
            Generate
          </button>
        </section>

        <section className="results">
          {this.state.documents.map((value, index) => {
            return (
              <div key={index} className="results__result">
                <div className="results__result__image">
                  <img src={this.state.uploads[index]} width="250px" />
                </div>
                <div className="results__result__info">
                  <div className="results__result__info__codes">
                    <small>
                      <strong>Confidence Score:</strong> {value.confidence}
                    </small>
                  </div>
                  <div className="results__result__info__codes">
                    <small>
                      <strong>Pattern Output:</strong>{' '}
                      {value.pattern.map(pattern => {
                        return pattern + ', '
                      })}
                    </small>
                  </div>
                  <div className="results__result__info__text">
                    <small>
                      <strong>Full Output:</strong> {value.text}
                    </small>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
        <p>
          Return to <Link to="/fridge">Fridge</Link>
        </p>
      </div>
    )
  }
}
const mapState = state => {
  return {
    // food: state.fridge.food
  }
}

const mapDispatch = dispatch => {
  return {
    // fetchFood: () => dispatch(fetchFood()),
    // deleteFood: id => dispatch(deleteFood(id))
  }
}

export default connect(mapState, mapDispatch)(Receipt)
