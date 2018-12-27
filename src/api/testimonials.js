import queryString from 'querystring'
import fullURL from './config'

export default {
  find(target) {
    const url = fullURL(`api/v1/testimonials/${target}`)
    return fetch(url).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
  },

  findUnpublished() {
    return this.find('unpublished')
  },

  findByPartner(partnerId) {
    return this.find(partnerId)
  },

  send(testimonial) {
    const url = fullURL('api/v1/testimonials')
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: queryString.stringify({
        testimonial: JSON.stringify(testimonial)
      })
    }).then((responce) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  },

  public(testimonial, token) {
    const url = fullURL('api/v1/testimonials')
    if (!token) {
      throw new Error('Access denied!')
    }
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Auth-Token': token
      },
      body: queryString.stringify({
        testimonial: JSON.stringify(testimonial)
      })
    }).then((responce) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  },

  delete(testimonialId, token) {
    const url = fullURL(`api/v1/testimonials/${testimonialId}`)
    if (!token) {
      throw new Error('Access denied!')
    }
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Auth-Token': token
      }
    }).then((responce) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  }
}
