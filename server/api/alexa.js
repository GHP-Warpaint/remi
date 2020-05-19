const router = require('express').Router()
const {FoodItem, User} = require('../db/models')
require('../../secrets')
const axios = require('axios')

// /api/alexa/add, should add item to user's fridge
router.post('/add', async (req, res, next) => {
  try {
    console.log(req.body)
    const foodName = req.body.food
    const userId = req.body.userId

    const user = await User.findByPk(userId)
    const food = await FoodItem.findOne({
      where: {
        name: foodName
      }
    })

    food.addUser(user)
    res.json(food.dataValues)
  } catch (error) {
    next(error)
  }
})

// sends recipe data to Alexa based on items in their fridge"
router.get('/recipe/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const currentUser = await User.findByPk(id)
    const food = await currentUser.getFoodItems()
    let foodNames = food.map(food => {
      return food.name
    })
    foodNames = foodNames.join(',+')
    const apiKey = process.env.SPOON_API_KEY
    let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=`
    requestString = requestString + foodNames + '&number=1&ranking=2'

    const returnReq = await axios.get(requestString)
    const recipeId = returnReq.data[0].id
    const recipeTitle = returnReq.data[0].title

    const recipe = {recipeId, recipeTitle}
    res.json(recipe)
  } catch (error) {
    next(error)
  }
})

module.exports = router
