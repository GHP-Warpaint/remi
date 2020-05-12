const router = require('express').Router()
const {FoodItem, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const id = 1
    const currentUser = await User.findByPk(id)
    const food = await currentUser.getFoodItems()
    res.json(food)
  } catch (err) {
    next(err)
  }
})
