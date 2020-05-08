const User = require('./user')
const FoodItems = require('./foodItems')

FoodItems.belongsToMany(User, {through: 'fridge'})
User.hasMany(FoodItems, {throguh: 'fridge'})

module.exports = {
  User,
  FoodItems
}
