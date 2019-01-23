import { combineReducers } from 'redux'
import testimonials from './testimonials'
import partners from './partners'
import session from './session'
import filters from './filters'
import sorting from './sorting'
import popups from './popups'
import auth from './auth'
import bot from './bot'

export default combineReducers({
  auth, bot, filters, sorting, testimonials,
  session, partners, popups
})
