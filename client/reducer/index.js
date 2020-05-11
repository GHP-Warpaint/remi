import {combineReducers} from 'redux'
import fridgeReducer from './fridge'
import userReducer from './user'
import foodItemsReducer from './foodItems'

const appReducer = combineReducers({
  fridge: fridgeReducer,
  user: userReducer,
  foodItems: foodItemsReducer
})

export default appReducer
