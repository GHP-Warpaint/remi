const router = require('express').Router()
const {FoodItem, User} = require('../db/models')

// /api/alexa/add, should add item to user's fridge
router.post('/add', async (req, res, next) => {
  try {
    console.log(req.body)
    const foodName = req.body.food
    const userId = req.body.userId

    const user = await User.findByPk(userId)
    const food = await FoodItem.findOne({
      where: {
        name: foodName
      }
    })

    food.addUser(user)
    res.json(food.dataValues)
  } catch (error) {
    next(error)
  }
})

module.exports = router
