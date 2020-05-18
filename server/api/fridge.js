const router = require('express').Router()
const {FoodItem, User} = require('../db/models')
module.exports = router

//mounted on /fridge
//getting contents of fridge by user
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

// i don't know if this is meant to lead somewhere other than fridge
//does this path have the same goal as above?
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.session.passport.user
    const currentUser = await User.findByPk(id)
    const food = await currentUser.getFoodItems({
      where: {id: req.params.id}
    })
    res.json(food)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.session.passport.user
    const currentUser = await User.findByPk(id)
    await currentUser.removeFoodItem(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

//add food item to fridge
//having issues with this route
router.post('/add', async (req, res, next) => {
  try {
    const foodName = req.body.name
    const userId = req.session.passport.user
    const user = await User.findByPk(userId)
    const food = await FoodItem.findOne({
      where: {
        name: foodName
      }
    })
    food.addUser(user)
    res.json(food.dataValues)
  } catch (error) {
    console.error(error)
  }
})
