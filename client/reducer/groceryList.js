import axios from 'axios'

export const GET_GROCERY_LIST = 'FETCH_GROCERY_LIST'
export const ADDTO_GROCERY_LIST = 'ADDTO_GROCERY_LIST'
export const REMOVEFROM_GROCERY_LIST = 'REMOVEFROM_GROCERY_LIST'

export const getGroceryList = groceryList => ({
  type: GET_GROCERY_LIST,
  groceryList
})

export const addToGroceryList = newFoodName => ({
  type: ADDTO_GROCERY_LIST,
  newFoodName
})

export const removeFromGroceryList = oldFoodName => ({
  type: REMOVEFROM_GROCERY_LIST,
  oldFoodName
})

export const fetchGroceryList = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/groceryList`)
      dispatch(getGroceryList(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addGroceryListItem = (id, newFood) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/groceryList/${id}`, newFood)
      dispatch(addToGroceryList(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const removeGroceryListItem = id => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(`/api/groceryList/${id}`)
      dispatch(removeFromGroceryList(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  groceryList: []
}

export default function groceryListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GROCERY_LIST:
      return {...state, groceryList: action.groceryList}
    case ADDTO_GROCERY_LIST:
      return {...state, groceryList: [...state.groceryList, action.newFoodName]}
    case REMOVEFROM_GROCERY_LIST:
      return {
        ...state,
        groceryList: [...state.groceryList].filter(
          groceryList => groceryList.id !== action.oldFoodName
        )
      }
    default:
      return state
  }
}
