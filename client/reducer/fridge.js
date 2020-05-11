import axios from 'axios'

/**
 * ACTION TYPES
 */

// const GET_FOOD = 'GET_FOOD'
const ADD_FOOD = 'ADD_FOOD'

// const getFood = food => {
//   return {
//     type: GET_FOOD,
//     food
//   }
// }

const addFood = foodItem => {
  return {
    type: ADD_FOOD,
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

export const addFoodToFridge = foodName => {
  return async dispatch => {
    try {
      const {name} = foodName
      const data = await axios.get(`/api/foodItems?name=${name}`)
      console.log(data)
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
    // case GET_FOOD:
    //   return {...state, food: action.food}
    case ADD_FOOD:
      return {...state, food: [state.food, ...action.food]}
    default:
      return state
  }
}
