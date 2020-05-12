const router = require('express').Router()
const {FoodItem, User} = require('../db/models')
module.exports = router

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
    id = req.session.passport.user
    const currentUser = await User.findByPk(id)
    const deleteFood = await currentUser.getFoodItems({
      where: {id: req.params.id}
    })
    console.log(deleteFood.fridge)

    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
