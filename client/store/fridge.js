import axios from 'axios'

const GET_FOOD = 'GET_FOOD'

const setFood = food => ({
  type: GET_FOOD,
  food
})

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

const initialState = {
  food: []
}

export default function fridgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD:
      console.log(action)
      console.log('^^^^action')
      return {...state, food: action.food}
    default:
      return state
  }
}
