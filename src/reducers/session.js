import { SESSION_INIT, SESSION_ERROR, SESSION_UPDATE } from '../actions/session'

const initialState = {
  query: {},
  ipInfo: null,
  userId: null,
  browser: 'unknown',
  botTest: {}
}

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_INIT:
      return action.session
    case SESSION_UPDATE:
      return {...state, [action.field]: action.value}
    default:
      return state
  }
}

export default sessionReducer
