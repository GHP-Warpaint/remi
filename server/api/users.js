const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
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
    const updateCampus = await userUpdate.update(req.body)
    res.json(updateCampus)
  } catch (error) {
    next(error)
  }
})
