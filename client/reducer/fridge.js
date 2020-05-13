import axios from 'axios'

const GET_FOOD = 'GET_FOOD'
const ADD_FOOD = 'ADD_FOOD'

const setFood = food => ({
  type: GET_FOOD,
  food
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

export const addFoodItemToFridge = food => {
  return async dispatch => {
    try {
      const newFoodItem = await axios.post(`/api/foodItems`, {
        name: food.name
      })
      console.log('inthunk', newFoodItem)
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
    case GET_FOOD:
      console.log('state in reducer', state)
      return {...state, food: action.food}
    default:
      return state
  }
}
