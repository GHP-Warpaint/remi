import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATED_NAME = 'UPDATED_NAME'
const UPDATED_EMAIL = 'UPDATED_EMAIL'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updatedName = name => ({type: UPDATED_NAME, name})
const updatedEmail = email => ({type: UPDATED_EMAIL, email})

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

export const updateName = (userId, name) => async dispatch => {
  try {
    const res = await axios.put(`/auth/${userId}`, name)
    dispatch(updatedName(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const updateEmail = (userId, email) => async dispatch => {
  try {
    const res = await axios.put(`/auth/${userId}`, email)
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
const defaultUser = {}

/**
 * REDUCER
 */
export default function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
