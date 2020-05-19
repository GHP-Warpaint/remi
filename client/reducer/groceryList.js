import axios from 'axios'

export const GET_GROCERY_LIST = 'FETCH_GROCERY_LIST'
export const ADDTO_GROCERY_LIST = 'ADDTO_GROCERY_LIST'
export const REMOVEFROM_GROCERY_LIST = 'REMOVEFROM_GROCERY_LIST'

export const getGroceryList = groceryList => ({
  type: GET_GROCERY_LIST,
  groceryList
})

export const addToGroceryList = NewFoodNames => ({
  type: ADDTO_GROCERY_LIST,
  NewFoodNames
})

export const removeFromGroceryList = OldFoodNames => ({
  type: REMOVEFROM_GROCERY_LIST,
  OldFoodNames
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
      return {...state, groceryList: action.groceryList}
    case REMOVEFROM_GROCERY_LIST:
      return {...state, groceryList: action.groceryList}
    default:
      return state
  }
}
