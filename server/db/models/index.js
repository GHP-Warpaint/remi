const User = require('./user')
const FoodItem = require('./foodItem')

FoodItem.belongsToMany(User, {through: 'fridge'})
User.hasMany(FoodItem)

module.exports = {
  User,
  FoodItem
}
