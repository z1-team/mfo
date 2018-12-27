import api from '../api'

export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const logout = () => ({type: AUTH_LOGOUT})

export function login(login, password) {
  return async (dispatch) => {
    dispatch({type: AUTH_LOGIN, status: 1})
    try {
      const token = await api.auth.login(login, password)
      dispatch({type: AUTH_LOGIN, status: 2, token})
    } catch (error) {
      dispatch({type: AUTH_LOGIN, status: 0, error})
    }
  }
}
