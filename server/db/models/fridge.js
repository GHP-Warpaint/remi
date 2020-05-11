const Sequelize = require('sequelize')
const db = require('../db')

const Fridge = db.define('fridge', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = Fridge
