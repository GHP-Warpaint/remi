import axios from 'axios'

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
      const newFoodItem = await axios.post(`/api/fridge/add`, {name: food.name})
      // console.log('in Thunk', data)
      // console.log('inthunk', newFoodItem)
      dispatch(addFood(newFoodItem.data))
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
