import {authToken} from '../selectors/auth'
import api from '../api'

export const TESTIMONIALS_FETCH_NEW = 'TESTIMONIALS_FETCH_NEW'
export const TESTIMONIALS_FETCH = 'TESTIMONIALS_FETCH'
export const TESTIMONIAL_PUBLIC = 'TESTIMONIAL_PUBLIC'
export const TESTIMONIAL_DELETE = 'TESTIMONIAL_DELETE'
export const TESTIMONIAL_SEND = 'TESTIMONIAL_SEND'

export function fetchNewTestimonials() {
  return async (dispatch) => {
    dispatch({type: TESTIMONIALS_FETCH_NEW, status: 1})
    try {
      const testimonials = await api.testimonials.findUnpublished()
      dispatch({type: TESTIMONIALS_FETCH_NEW, status: 2, testimonials})
    } catch (error) {
      dispatch({type: TESTIMONIALS_FETCH_NEW, status: 0, error})
    }
  }
}

export function fetchTestimonials(partnerId) {
  return async (dispatch) => {
    dispatch({type: TESTIMONIALS_FETCH, status: 1, partnerId})
    try {
      const testimonials = await api.testimonials.findByPartner(partnerId)
      dispatch({type: TESTIMONIALS_FETCH, status: 2, testimonials})
    } catch (error) {
      dispatch({type: TESTIMONIALS_FETCH, status: 0, error})
    }
  }
}

export function publicTestimonial(testimonial) {
  return async (dispatch, getState) => {
    const token = authToken(getState())
    dispatch({type: TESTIMONIAL_PUBLIC, status: 1, id: testimonial.id})
    try {
      const status = await api.testimonials.public(testimonial, token)
      dispatch({type: TESTIMONIAL_PUBLIC, status})
    } catch (error) {
      dispatch({type: TESTIMONIAL_PUBLIC, status: 0, error})
    }
  }
}

export function deleteTestimonial(testimonialId) {
  return async (dispatch, getState) => {
    const token = authToken(getState())
    dispatch({type: TESTIMONIAL_DELETE, status: 1, id: testimonialId})
    try {
      const status = await api.testimonials.delete(testimonialId, token)
      dispatch({type: TESTIMONIAL_DELETE, status})
    } catch (error) {
      dispatch({type: TESTIMONIAL_DELETE, status: 0, error})
    }
  }
}

export function sendTestimonial(testimonial) {
  return async (dispatch) => {
    dispatch({type: TESTIMONIAL_SEND, status: 1})
    try {
      const status = await api.testimonials.send(testimonial)
      dispatch({type: TESTIMONIAL_SEND, status})
    } catch (error) {
      dispatch({type: TESTIMONIAL_SEND, status: 0, error})
    }
  }
}
