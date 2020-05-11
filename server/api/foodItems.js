const router = require('express').Router()
const {FoodItem} = require('../db/models')

//foodItems

router.get('/', async (req, res, next) => {
  try {
    const foodName = req.query.name

    if (req.query.name) {
      const foodItem = await FoodItem.findOne({
        where: {
          name: foodName
        }
      })
      res.json(foodItem)
    }
    const foodItems = await FoodItem.findAll()
    res.json(foodItems)
  } catch (err) {
    next(err)
  }
})

module.exports = router
