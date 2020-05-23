import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATED_NAME = 'UPDATED_NAME'
const UPDATED_EMAIL = 'UPDATED_EMAIL'
const UPDATED_GROCERIES = 'UPDATED_GROCERIES'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updatedName = name => ({type: UPDATED_NAME, name})
const updatedEmail = email => ({type: UPDATED_EMAIL, email})
const updatedGroceryList = groceryList => ({
  type: UPDATED_GROCERIES,
  groceryList
})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const updateGroceryList = (userId, groceryList) => async dispatch => {
  try {
    const res = await axios.put(`/api/users/${userId}`, groceryList)
    console.log('REDUX GROCERIES, res', res)
    dispatch(updatedGroceryList(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const updateName = (userId, name) => async dispatch => {
  try {
    const res = await axios.put(`/api/users/${userId}`, name)
    dispatch(updatedName(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const updateEmail = (userId, email) => async dispatch => {
  try {
    const res = await axios.put(`/api/users/${userId}`, email)
    dispatch(updatedEmail(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * INITIAL STATE
 */
const defaultUser = {
  firstName: '',
  lastName: '',
  email: '',
  groceryList: []
}

/**
 * REDUCER
 */
export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATED_NAME:
      return {
        ...state,
        firstName: action.name.firstName,
        lastName: action.name.lastName
      }
    case UPDATED_EMAIL:
      return {...state, email: action.email.email}
    case UPDATED_GROCERIES:
      return {...state, groceryList: [...action.groceryList.groceryList]}
    default:
      return state
  }
}
