const router = require('express').Router()
const {FoodItem} = require('../db/models')

//foodItems

router.get('/', async (req, res, next) => {
  try {
    if (req.body) {
      const foodItem = await FoodItem.findOne({
        where: {
          name: req.body.name
        }
      })
      res.json(foodItem)
    } else {
      const foodItems = await FoodItem.findAll()
      res.json(foodItems)
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
