const User = require('./user')
const FoodItem = require('./foodItem')

FoodItem.belongsToMany(User, {through: 'fridge'})
User.belongsToMany(FoodItem, {through: 'fridge'})

module.exports = {
  User,
  FoodItem
}
