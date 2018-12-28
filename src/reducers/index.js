import { combineReducers } from 'redux'
import partners from './partners'
import filters from './filters'
import sorting from './sorting'
import popups from './popups'
import auth from './auth'

export default combineReducers({
  auth, filters, sorting,
  partners, popups
})
