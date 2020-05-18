const router = require('express').Router()
const {FoodItem} = require('../db/models')

//get foodItems
router.get('/', async (req, res, next) => {
  try {
    const food = await FoodItem.findAll()
    res.json(food)
  } catch (error) {
    next(error)
  }
})

module.exports = router
