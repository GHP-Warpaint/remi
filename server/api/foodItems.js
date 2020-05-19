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

router.post('/', async (req, res, next) => {
  try {
    const {name, imageUrl} = req.body
    console.log(req.body)
    const newFood = await FoodItem.create({
      name,
      imageUrl
    })
    res.json(newFood)
  } catch (error) {
    next(error)
  }
})

module.exports = router
