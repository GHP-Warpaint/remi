import axios from 'axios'

const GET_FOOD = 'GET_FOOD'
const REMOVE_FOOD = 'REMOVE_FOOD'

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

export const fetchFood = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/fridge')
      console.log(data)
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
      dispatch(console.error(error))
    }
  }
}

const initialState = {
  food: []
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      return {...state, food: action.food}
    case REMOVE_FOOD:
      return {
        state,
        food: [...state.food].filter(food => food.id !== action.foodId)
      }
    default:
      return state
  }
}
