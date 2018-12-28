import { SESSION_INIT, SESSION_ERROR, SESSION_UPDATE } from '../actions/session'
import { ABTEST_FETCH } from '../actions/abtests'

const initialState = {
  query: {},
  ipInfo: null,
  userId: null,
  browser: 'unknown',
  abTests: {}
}

function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_INIT:
      return action.session
    case SESSION_UPDATE:
      return {...state, [action.field]: action.value}
    case ABTEST_FETCH:
      return action.status === 2
        ? {...state, abTests: action.tests}
        : state
    default:
      return state
  }
}

export default sessionReducer
