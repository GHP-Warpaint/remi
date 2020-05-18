const router = require('express').Router()
const {FoodItem, User} = require('../db/models')

//get foodItems
router.get('/', async (req, res, next) => {
  try {
    console.log(req)
    const foodItems = await FoodItem.findAll()
    res.json(foodItems)
  } catch (err) {
    next(err)
  }
})

module.exports = router
