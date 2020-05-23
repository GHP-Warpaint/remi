const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'firstName', 'lastName', 'groceryList']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const userUpdate = await User.findOne({
      where: {
        id: req.params.userId
      }
    })
    console.log('express req.body=>', req.body)
    const updateUser = await userUpdate.update(req.body)
    res.json(updateUser)
  } catch (error) {
    next(error)
  }
})
