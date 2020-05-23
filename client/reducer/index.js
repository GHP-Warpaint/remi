import {combineReducers} from 'redux'
import fridgeReducer from './fridge'
import userReducer from './user'
// import foodItemsReducer from './foodItems'
import recipeReducer from './recipe'
import dailyRecipeReducer from './dailyRecipe'
import foodItemsReducer from './foodItems'

const appReducer = combineReducers({
  fridge: fridgeReducer,
  user: userReducer,
  inventory: foodItemsReducer,
  recipe: recipeReducer,
  dailyRecipe: dailyRecipeReducer
})

export default appReducer
