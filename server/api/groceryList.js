const router = require('express').Router()
const {GroceryList, User} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const groceryLists = await GroceryList.findAll({
      where: {
        id: req.params.id
      }
    })
    res.json(groceryLists)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.session.passport.user
    const currentUser = await User.findByPk(id)
    await currentUser.removeGroceryListItem(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const foodName = req.body.name
    const userId = req.session.passport.user
    const user = await User.findByPk(userId)
    const groceries = await GroceryList.findOne({
      where: {
        name: foodName
      }
    })
    groceries.addUser(user)
    res.json(groceries)
  } catch (error) {
    next(error)
  }
})

module.exports = router
