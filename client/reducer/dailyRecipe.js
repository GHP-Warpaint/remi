import axios from 'axios'

export const FETCH_DAILY_RECIPE = 'FETCH_DAILY_RECIPE'

export const fetchDailyRecipe = dailyrecipe => ({
  type: FETCH_DAILY_RECIPE,
  dailyrecipe
})

export const getDailyRecipe = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/dailyRecipes`)
      dispatch(fetchDailyRecipe(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  dailyRecipe: []
}

export default function dailyRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DAILY_RECIPE:
      return {...state, dailyRecipe: action.dailyrecipe}
    default:
      return state
  }
}
