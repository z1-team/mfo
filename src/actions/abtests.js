import {clientBanner} from '../selectors/session'
import api from '../api'

export const ABTEST_FETCH = 'ABTEST_FETCH'

export function fetchABTest(clientId) {
  return async (dispatch, getState) => {
    const banner = clientBanner(getState())
    dispatch({type: ABTEST_FETCH, status: 1})
    try {
      const tests = await api.tests.assign(banner, clientId)
      dispatch({type: ABTEST_FETCH, status: 2, tests})
      localStorage.setItem('abTests', JSON.stringify(tests))
    } catch (error) {
      dispatch({type: ABTEST_FETCH, status: 0, error})
    }
  }
}
