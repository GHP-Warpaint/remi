import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_FOOD = 'GET_FOOD'
const ADD_FOODITEM = 'ADD_FOOD'

const setFood = food => {
  return {
    type: GET_FOOD,
    food
  }
}

const addFood = foodItem => {
  return {
    type: ADD_FOODITEM,
    foodItem
  }
}

export const fetchFood = food => {
  return async dispatch => {
    try {
      const {data} = await axios.get('INSERT API HERE')
      dispatch(setFood(data))
    } catch (error) {
      dispatch(console.error(error))
    }
  }
}

export const addFoodToFridge = food => {
  return async dispatch => {
    try {
      const {name} = food
      const data = await axios.get(`/api/foodItems`, name)
      if (data) {
        addFood(data)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  food: []
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOOD:
      return {...state, food: action.food}
    case ADD_FOOD:
      return {...state, food: [state.food, ...action.food]}
    default:
      return state
  }
}
