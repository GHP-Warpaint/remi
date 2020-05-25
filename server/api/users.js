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

router.put('/:userId', async (req, res, next) => {
  try {
    console.log(req.session.passport)
    const userUpdate = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    const updatedUser = await userUpdate.update(req.body)
    console.log(updatedUser)
    res.json(updatedUser)
  } catch (error) {
    next(error)
  }
})
