const User = require('./user')
const FoodItem = require('./foodItem')
const DailyRecipe = require('./dailyRecipe')

FoodItem.belongsToMany(User, {through: 'fridge'})
User.belongsToMany(FoodItem, {through: 'fridge'})

module.exports = {
  User,
  FoodItem,
  DailyRecipe
}
