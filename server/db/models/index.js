const User = require('./user')
const FoodItem = require('./foodItem')
const Fridge = require('./fridge')

//original
// FoodItem.belongsToMany(User, {through: 'fridge'})

//with ben
// User.hasMany(FoodItem)
// FoodItem.belongsTo(User)

// User.hasOne(Fridge)

// Fridge.hasMany(FoodItem)
// FoodItem.belongsTo(Fridge)

User.hasOne(Fridge)

FoodItem.belongsToMany(Fridge, {through: 'fridgeItems'})

module.exports = {
  User,
  FoodItem,
  Fridge
}
