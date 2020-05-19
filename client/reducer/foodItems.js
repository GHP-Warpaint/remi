import axios from 'axios'

const GET_FOODITEMS = 'GET_FOODITEMS'

const getFoodItems = foodItems => {
  return {
    type: GET_FOODITEMS,
    foodItems
  }
}

export const fetchFoodItems = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/foodItems`)
      dispatch(getFoodItems(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  inventory: []
}

export default function foodItemsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOODITEMS:
      return {
        ...state,
        inventory: action.foodItems
      }
    default:
      return state
  }
}
