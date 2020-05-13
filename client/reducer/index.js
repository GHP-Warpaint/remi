import {combineReducers} from 'redux'
import fridgeReducer from './fridge'
import userReducer from './user'
import foodItemsReducer from './foodItems'
import recipeReducer from './recipe'

const appReducer = combineReducers({
  fridge: fridgeReducer,
  user: userReducer,
  foodItems: foodItemsReducer,
  recipe: recipeReducer
})

export default appReducer
