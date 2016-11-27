import {  LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/User'

export function login(payload) {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    })

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: true
        }
      })
    },2000)

  }
}

export function logout() {
  return {
    type: LOGIN_SUCCESS
  }
}
