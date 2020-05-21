const User = require('./user')
const FoodItem = require('./foodItem')
const DailyRecipe = require('./dailyRecipe')
const GroceryList = require('./groceryList')

FoodItem.belongsToMany(User, {through: 'fridge'})
User.belongsToMany(FoodItem, {through: 'fridge'})
User.hasOne(GroceryList)

module.exports = {
  User,
  FoodItem,
  DailyRecipe,
  GroceryList
}
