const Sequelize = require('sequelize')
const db = require('../db')

const FoodItem = db.define('foodItem', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cdn3.iconfinder.com/data/icons/food-155/100/Healthy_food_1-512.png'
  }
})

module.exports = FoodItem
