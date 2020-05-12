const router = require('express').Router()
const {FoodItem, User} = require('../db/models')

//get foodItems
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

//add food item to fridge
router.post('/', async (req, res, next) => {
  try {
    const foodName = req.body.name
    const userId = 8
    //const userId = req.session.id
    const user = await User.findByPk(userId)
    const food = await FoodItem.findOne({
      where: {
        name: foodName
      }
    })
    const [fridge] = await food.addUser(user)
    res.json(fridge.dataValues)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
