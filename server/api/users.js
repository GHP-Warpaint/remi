const router = require('express').Router()
const {User} = require('../db/models')
const isAuthenticated = require('./utilities')
const isAdmin = require('./utilities')
module.exports = router

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', isAuthenticated, async (req, res, next) => {
  try {
    const userUpdate = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    console.log('express req.body=>', req.body)
    const updateCampus = await userUpdate.update(req.body)
    res.json(updateCampus)
  } catch (error) {
    next(error)
  }
})
