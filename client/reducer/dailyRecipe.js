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
      const randomNum = Math.floor(Math.random() * data.length)
      const dailyRecipe = data[randomNum]
      dispatch(fetchDailyRecipe(dailyRecipe))
    } catch (error) {
      console.error(error)
    }
  }
}

const initialState = {
  isLoading: true,
  dailyRecipe: {}
}

export default function dailyRecipeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DAILY_RECIPE:
      return {
        ...state,
        dailyRecipe: action.dailyrecipe,
        isLoading: false
      }
    default:
      return state
  }
}
