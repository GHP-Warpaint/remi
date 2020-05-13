import {combineReducers} from 'redux'
import fridgeReducer from './fridge'
import userReducer from './user'

const appReducer = combineReducers({
  fridge: fridgeReducer,
  user: userReducer
})

export default appReducer
