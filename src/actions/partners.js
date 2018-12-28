import {authToken} from '../selectors/auth'
import api from '../api'

export const PARTNERS_FETCH = 'PARTNERS_FETCH'
export const PARTNER_UPDATE = 'PARTNER_UPDATE'
export const PARTNER_SELECT = 'PARTNER_SELECT'
export const PARTNER_CREATE = 'PARTNER_CREATE'
export const PARTNER_DELETE = 'PARTNER_DELETE'
export const PARTNERS_NEXT = 'PARTNERS_NEXT'

export const nextPartners = (count) => ({type: PARTNERS_NEXT, count})
export const selectPartner = (id) => ({type: PARTNER_SELECT, id})
export const createPartner = (partnerType) => ({
  type: PARTNER_CREATE, partnerType
})

export function fetchPartners() {
  return async (dispatch) => {
    dispatch({type: PARTNERS_FETCH, status: 1})
    try {
      const partners = await api.partners.all()
      dispatch({type: PARTNERS_FETCH, status: 2, partners})
    } catch (error) {
      dispatch({type: PARTNERS_FETCH, status: 0, error})
    }
  }
}

export function updatePartner(id, partner) {
  return async (dispatch, getState) => {
    const token = authToken(getState())
    dispatch({type: PARTNER_UPDATE, status: 1, id, partner})
    try {
      const status = await api.partners.update(id, partner, token)
      dispatch({type: PARTNER_UPDATE, status})
    } catch (error) {
      dispatch({type: PARTNER_UPDATE, status: 0, error})
    }
  }
}

export function deletePartner(id) {
  return async (dispatch, getState) => {
    const token = authToken(getState())
    dispatch({type: PARTNER_DELETE, status: 1, id})
    try {
      const status = await api.partners.delete(id, token)
      dispatch({type: PARTNER_DELETE, status})
    } catch (error) {
      dispatch({type: PARTNER_DELETE, status: 0, error})
    }
  }
}
