const router = require('express').Router()
const {GroceryList} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const groceryLists = await GroceryList.findAll()
    res.json(groceryLists)
  } catch (error) {
    next(error)
  }
})

module.exports = router
