const Sequelize = require('sequelize')
const db = require('../db')

const FoodItems = db.define('foodItems', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmpty: false
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cdn3.iconfinder.com/data/icons/food-155/100/Healthy_food_1-512.png'
  }
})

module.exports = FoodItems
