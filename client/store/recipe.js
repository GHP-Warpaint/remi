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
    const {data} = await axios
      .get
      //I really don't know what to put here
      ()
    dispatch(getRecipe(data))
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
