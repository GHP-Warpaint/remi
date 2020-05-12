import axios from 'axios'
//action creators
const GET_RECIPE = 'GET_RECIPE'

//action type
const getRecipe = retrievedRecipe => ({
  type: GET_RECIPE,
  retrievedRecipe
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

export default function recipeReducer(state = initialRecipeState, action) {
  switch (action.type) {
    case GET_RECIPE:
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
