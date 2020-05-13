const Sequelize = require('sequelize')
const db = require('../db')

const DailyRecipe = db.define('dailyRecipe', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: Sequelize.TEXT
  }
})

module.exports = DailyRecipe
