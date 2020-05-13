import {combineReducers} from 'redux'
import fridgeReducer from './fridge'
import userReducer from './user'
import foodItemsReducer from './foodItems'
import recipeReducer from './recipe'
import dailyRecipeReducer from './dailyRecipe'

const appReducer = combineReducers({
  fridge: fridgeReducer,
  user: userReducer,
  foodItems: foodItemsReducer,
  recipe: recipeReducer,
  dailyRecipe: dailyRecipeReducer
})

export default appReducer
