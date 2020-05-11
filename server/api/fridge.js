const router = require('express').Router()
const {Fridge} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const food = await Frigde.findAll({
      where: {
        userid: req.userid
      }
    })
    res.json(food)
  } catch (err) {
    next(err)
  }
})
