import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
// import AddFoodItem from './AddFoodItem'
// import {fetchFood, deleteFood} from '../reducer/fridge'
// import axios from 'axios'
import {fetchFoodItems} from '../reducer/foodItems'
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
      lines: [],
      foodHash: {},
      reciptItems: []
    }
    //this.generateText = this.generateText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getTextFromImage = this.getTextFromImage.bind(this)
  }

  async componentDidMount() {
    event.preventDefault()
    await this.props.fetchFoodItems()
    const foodHash = {}
    this.props.inventory.map(foodObj => {
      foodHash[foodObj.name] = foodObj
    })
    this.setState({
      foodHash: foodHash
    })
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
    // const groceryList = data.lines.map(obj => {
    //   return obj.text.replace(/[^a-zA-Z ]/g, '').trim()
    // })
    // console.log('groceryList ', groceryList)
    // this.setState({
    //   lines: groceryList
    // })
    let words = data.words.map(obj => {
      return obj.text.replace(/[^a-zA-Z ]/g, '').trim()
    })
    words = Array.from(new Set(words))
    const newArr = words
      .filter(word => {
        word = word.toLowerCase()
        if (this.state.foodHash[word]) {
          return this.state.foodHash[word]
        }
      })
      .map(word => {
        word = word.toLowerCase()
        return this.state.foodHash[word]
      })

    console.log('newArr', newArr)

    this.setState({
      reciptItems: newArr
    })
  }

  render() {
    if (!this.props.inventory) return <h1> loading... </h1>

    const foodHash = {}

    this.props.inventory.map(foodObj => {
      foodHash[foodObj.name] = true
    })

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
            {this.state.uploads.map(value => (
              <img key={value} src={value} width="100px" />
            ))}
          </div>
          <button
            type="submit"
            className="button"
            onClick={this.getTextFromImage}
          >
            Generate
          </button>
        </section>
        {console.log('PROPS! >>>>>>>>', this.props)}
        <div id="fridge">
          {this.state.reciptItems.length ? (
            <div>
              {this.state.reciptItems.map(item => (
                <div key={item.id} className="item">
                  <img src={item.imageUrl} height="100px" width="auto" />
                  <br />
                  {item.name}
                </div>
              ))}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
        <p>
          Return to <Link to="/fridge">Fridge</Link>
        </p>
      </div>
    )
  }
}
const mapState = state => {
  return {
    inventory: state.inventory.inventory
    //food: state.fridge.food
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFoodItems: () => dispatch(fetchFoodItems())
    // fetchFood: () => dispatch(fetchFood()),
    // deleteFood: id => dispatch(deleteFood(id))
  }
}

export default connect(mapState, mapDispatch)(Receipt)
