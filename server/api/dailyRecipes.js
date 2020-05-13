const router = require('express').Router()
const {DailyRecipe} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const dailyrecipe = await DailyRecipe.findAll()
    res.json(dailyrecipe)
  } catch (error) {
    next(error)
  }
})

module.exports = router
