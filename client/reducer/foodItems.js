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

// export const fetchFoodItemsFromServer = () => {
//   return async dispatch => {
//     try {
//       const data = await axios.get(`/api/foodItems`)
//       console.log(data)
//       getFoodItems(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export const getFoodItem = food => {
  return async dispatch => {
    try {
      const {name} = food
      const foodItem = await axios.get(`/api/foodItems`, {
        params: {
          name: name
        }
      })
      console.log('in thunk', foodItem)
      const foodObject = foodItem.data
      console.log(foodObject)
    } catch (error) {
      console.error(error)
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
