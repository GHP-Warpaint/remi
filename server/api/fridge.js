const router = require('express').Router()
const {FoodItem, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const id = req.session.passport.user
    const currentUser = await User.findByPk(id)
    const food = await currentUser.getFoodItems()
    res.json(food)
  } catch (err) {
    next(err)
  }
})

// --------------
// Is this to get a single food Item?

//get foodItems
/*router.get('/', async (req, res, next) => {
  try {
    const foodId = req.query.id
    console.log(req.query)
    if (req.query.id) {
      const foodItem = await FoodItem.findOne({
        where: {
          id: foodId,
        },
      })
      res.json(foodItem)
    }
    const foodItems = await FoodItem.findAll()
    res.json(foodItems)
  } catch (err) {
    next(err)
  }
})
*/

//add food item to fridge
router.post('/', async (req, res, next) => {
  try {
    const foodName = req.body.name
    const userId = req.session.passport.user
    const user = await User.findByPk(userId)
    const food = await FoodItem.findOne({
      where: {
        name: foodName
      }
    })
    const data = await food.addUser(user)

    console.log(data)

    const fridgeItem = data[0].dataValues

    res.json(fridgeItem)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
