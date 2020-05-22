import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFoodItems} from '../reducer/foodItems'
import {addMultipleItemsToFridge} from '../reducer/fridge'
import tesseract, {createWorker} from 'tesseract.js'

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
      receiptItems: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.getTextFromImage = this.getTextFromImage.bind(this)
    this.sendItemsToFridge = this.sendItemsToFridge.bind(this)
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

    this.setState({
      receiptItems: newArr
    })
  }

  async sendItemsToFridge() {
    let items = this.state.receiptItems
    items = items.map(food => {
      return food.name
    })
    await this.props.bulkAdd(items)
    this.setState({
      receiptItems: []
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
        <h1>Please Upload Your Receipt</h1>
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
          {!this.state.receiptItems.length ? (
            <button
              type="submit"
              className="button"
              onClick={this.getTextFromImage}
            >
              Generate
            </button>
          ) : (
            <button
              type="submit"
              className="add-button"
              onClick={this.sendItemsToFridge}
            >
              Add Items To Fridge
            </button>
          )}
        </section>
        <div id="fridge">
          {this.state.receiptItems.length ? (
            <div>
              {this.state.receiptItems.map(item => (
                <div key={item.id} className="item">
                  <img src={item.imageUrl} height="50px" width="auto" />
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
  }
}

const mapDispatch = dispatch => {
  return {
    fetchFoodItems: () => dispatch(fetchFoodItems()),
    bulkAdd: foodItems => dispatch(addMultipleItemsToFridge(foodItems))
  }
}

export default connect(mapState, mapDispatch)(Receipt)
