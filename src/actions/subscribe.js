import { getClientId } from '../selectors/session'
import api from '../api'

export const EMAIL_SUBSCRIBE = 'EMAIL_SUBSCRIBE'

export function subscribeEmail(email) {
  return async (dispatch, getState) => {
    const clientId = getClientId(getState())
    if (clientId) {
      dispatch({type: EMAIL_SUBSCRIBE, status: 1})
      try {
        const status = api.subscribers.add(clientId, email)
        dispatch({type: EMAIL_SUBSCRIBE, status: 2})
        localStorage.setItem('subscribed', true)
      } catch (error) {
        dispatch({type: EMAIL_SUBSCRIBE, status: 0, error})
      }
    } else {
      dispatch({type: EMAIL_SUBSCRIBE, status: 0})
      localStorage.setItem('subscribed', true)
    }
  }
}
