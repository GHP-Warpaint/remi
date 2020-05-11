import axios from 'axios'

const GET_FOODITEMS = 'GET_FOODITEMS'
const GET_FOOD = 'GET_FOOD'

const getFoodItems = foodItems => {
  return {
    type: GET_FOODITEMS,
    foodItems
  }
}

const getFood = food => {
  return {
    type: GET_FOOD,
    food
  }
}

export const fetchFoodItemsFromServer = () => {
  return async dispatch => {
    try {
      const data = await axios.get(`/api/foodItems`)
      console.log(data)
      getFoodItems(data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const getFoodItem = (food, user) => {
  return async dispatch => {
    try {
      const {name} = food
      const {userId} = user
      const data = await axios.get(`/api/foodItems`, {
        params: {
          name: name
        }
      })
      const foodObject = data.data
      getFoodItems(data.data)
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  food: {}
}

export default function foodItemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {
        ...state,
        food: action.food
      }
    default:
      return state
  }
}
