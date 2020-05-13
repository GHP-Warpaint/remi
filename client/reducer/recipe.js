import axios from 'axios'
//action creators
const GET_RECIPE = 'GET_RECIPE'
const SEND_TO_ALEXA = 'SEND_TO_ALEXA'
const GET_DIRECTIONS = 'GET_DIRECTIONS'

//action type
const getRecipe = recipe => ({
  type: GET_RECIPE,
  recipe
})

const sentAlexaRecipe = recipe => ({
  type: SEND_TO_ALEXA,
  recipe
})

const getDirections = directions => ({
  type: GET_DIRECTIONS,
  directions
})

const initialRecipeState = {
  recipe: [],
  directions: []
}

//thunks

export const fetchRecipe = ingredients => async dispatch => {
  try {
    const API_KEY = '2905bb46b5ea4b48aa1c8c6e3a434a6f'
    const INGREDIENT_LIST = ingredients
    let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=`

    const ingredientsString = INGREDIENT_LIST.join(',+')
    requestString = requestString + ingredientsString + '&number=1&ranking=2'

    //console.log('THUNK REQUEST STRING=>', requestString)
    // const returnReq = await axios.get(requestString)
    //console.log('THUNK RETURN REQUEST', returnReq)

    //just for testing
    const returnReq = {
      data: [
        {
          id: 284543,
          image: 'https://spoonacular.com/recipeImages/284543-312x231.jpg',
          title: '1 Minute Apple Tortilla'
        }
      ]
    }

    dispatch(getRecipe(returnReq.data))
  } catch (err) {
    console.error(err)
  }
}

export const fetchRecipeDirections = id => async dispatch => {
  try {
    const API_KEY = '2905bb46b5ea4b48aa1c8c6e3a434a6f'

    let requestString = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${API_KEY}`

    console.log('THUNK REQUEST STRING=>', requestString)
    const returnReq = await axios.get(requestString)
    console.log('THUNK RETURN REQUEST', returnReq)

    dispatch(getDirections(returnReq.data))
  } catch (err) {
    console.error(err)
  }
}

export const sendRecipe = () => async dispatch => {
  try {
    const {data} = await axios.post() //fill in
    dispatch(sentAlexaRecipe(data))
  } catch (err) {
    console.error(err)
  }
}

export default function recipeReducer(state = initialRecipeState, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.recipe
      }
    case GET_DIRECTIONS:
      return {
        ...state,
        directions: action.directions
      }
    // case SEND_TO_ALEXA:
    //   //probaby something?
    //   return {
    //     ...state
    //   }
    default:
      return {
        ...state
      }
  }
}
