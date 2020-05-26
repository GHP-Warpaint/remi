const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/foodItems', require('./foodItems'))
router.use('/fridge', require('./fridge'))
router.use('/dailyRecipes', require('./dailyRecipes'))
router.use('/alexa', require('./alexa'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
