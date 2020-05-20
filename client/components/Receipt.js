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
      lines: []
    }
    //this.generateText = this.generateText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getTextFromImage = this.getTextFromImage.bind(this)
  }

  handleChange(e) {
    let file = Array.from(e.target.files)
    let fileObj = file[0]
    const newUploads = []
    newUploads.push(URL.createObjectURL(fileObj))
    this.setState({uploads: newUploads})
  }

  async getTextFromImage() {
    const worker = createWorker()
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    const {data} = await worker.recognize(this.state.uploads[0])
    await worker.terminate()
    console.log('Data Lines >>>>>>>>>', data.lines)
    const groceryList = data.lines.map(obj => {
      return obj.text.replace(/[^a-zA-Z ]/g, '')
    })
    console.log('groceryList ', groceryList)
    // let newText = text.replace(/[^a-zA-Z ]/g, '')
    // console.log(newText)
    // let arr = newText.split('')
    // console.log(arr)
    // let unique = [...new Set(arr)]
    // console.log(unique)

    // console.log(newArr)
    this.setState({
      lines: groceryList
    })
    // console.log(this.state)
    //return text
  }

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
