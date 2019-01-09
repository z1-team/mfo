import { POPUP_OPEN, POPUP_CLOSE } from '../actions/popup'
import { FILTER_CHANGE } from '../actions/filters'
import { AUTH_LOGIN } from '../actions/auth'
import { PARTNER_CREATE } from '../actions/partners'
import { EMAIL_SUBSCRIBE } from '../actions/subscribe'

const initialState = {
  testimonial: false,
  categories: false,
  login: false,
  edit: false,
  email: false,
  subscribed: false
}

function popupsReducer(state = initialState, action) {
  switch (action.type) {
    case POPUP_OPEN:
      return {...state, [action.name]: true}
    case POPUP_CLOSE:
      return initialState
    case FILTER_CHANGE:
      return {...state, categories: false}
    case AUTH_LOGIN:
      return action.status === 2 ? {...state, login: false} : state
    case PARTNER_CREATE:
      return {...state, edit: true}
    case EMAIL_SUBSCRIBE:
      return action.status === 2 ? {...initialState, subscribed: true} : state
    default:
      return state
  }
}

export default popupsReducer
