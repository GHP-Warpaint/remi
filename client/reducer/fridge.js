import axios from 'axios'
require('../../secrets')

const GET_FOOD = 'GET_FOOD'
const REMOVE_FOOD = 'REMOVE_FOOD'
const ADD_FOOD = 'ADD_FOOD'

const setFood = food => ({
  type: GET_FOOD,
  food
})

const removeFood = foodId => {
  return {
    type: REMOVE_FOOD,
    foodId
  }
}

const addFood = foodItem => ({
  type: ADD_FOOD,
  foodItem
})

export const fetchFood = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/fridge')
      dispatch(setFood(data))
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

export const deleteFood = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/fridge/${id}`)
      dispatch(removeFood(id))
    } catch (err) {
      dispatch(console.error(err))
    }
  }
}

//food is sent as an object like {name:"milk"}
export const addFoodItem = food => {
  return async dispatch => {
    try {
      const edamamApiKey = process.env.EDAMAM_API_KEY
      const edamamID = process.env.EDAMAM_APPLICATION_ID
      const requestString =
        'https://api.edamam.com/api/food-database/parser?ingr='
      const foodString = food.name.split(' ').join('%20')
      const edamam =
        requestString +
        foodString +
        `&app_id=${edamamID}&app_key=${edamamApiKey}`
      let foodObj = {}

      const newFoodItem = await axios.post(`/api/fridge/add`, {name: food.name})

      if (!newFoodItem.data) {
        const foodData = await axios.get(edamam)
        const foodItem = foodData.data.parsed[0].food
        foodObj.name = foodItem.label
        foodObj.imageUrl = foodItem.image
        const addFoodtoFridge = await axios.post('/api/foodItems', foodObj)
        const newFoodItem = await axios.post(`/api/fridge/add`, {
          name: foodObj.name
        })
        dispatch(addFood(foodObj))
      } else {
        dispatch(addFood(newFoodItem.data))
      }
    } catch (err) {
      dispatch(console.error(err))
    }
  }
}

const initialState = {
  food: [],
  foodItem: {}
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {...state, food: action.food}
    case ADD_FOOD:
      console.log('in add reducer>>>>>>>>>>>>', state.food)
      console.log(action.foodItem)
      if (state.food.some(element => element.id === action.foodItem.id)) {
        return state
      }
      return {...state, food: [...state.food, action.foodItem]}
    case REMOVE_FOOD:
      return {
        state,
        food: [...state.food].filter(food => food.id !== action.foodId)
      }
    default:
      return state
  }
}
