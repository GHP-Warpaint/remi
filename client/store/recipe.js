import axios from 'axios'
//action creators
const GET_RECIPE = 'GET_RECIPE'
const SEND_TO_ALEXA = 'SEND_TO_ALEXA'

//action type
const getRecipe = retrievedRecipe => ({
  type: GET_RECIPE,
  retrievedRecipe
})

const sentAlexaRecipe = recipe => ({
  type: SEND_TO_ALEXA,
  recipe
})

const initialRecipeState = {
  title: '',
  imgUrl: '',
  steps: [],
  ingredients: []
}

//thunks

export const fetchRecipe = () => async dispatch => {
  try {
    const API_KEY = '2905bb46b5ea4b48aa1c8c6e3a434a6f'
    const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers']
    let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=`

    const ingredientsString = INGREDIENT_LIST.join(',+')
    requestString = requestString + ingredientsString
    console.log('THUNK REQUEST STRING=>', requestString)
    const returnReq = await axios.get(requestString)
    console.log('THUNK RETURN REQUEST', returnReq)
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
        ...state
      }
    case SEND_TO_ALEXA:
      //probaby something?
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
