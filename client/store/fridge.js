import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_FOOD = 'GET_FOOD'

const setFood = food => {
  return {
    type: GET_FOOD,
    food
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

const initialState = {
  food: []
}

export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FOOD:
      return {...state, food: action.food}
    default:
      return state
  }
}
