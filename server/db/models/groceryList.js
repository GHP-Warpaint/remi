const Sequelize = require('sequelize')
const db = require('../db')

const GroceryList = db.define('groceryList', {
  foodName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = GroceryList
