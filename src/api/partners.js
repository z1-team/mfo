import queryString from 'querystring'
import fullURL from './config'

export default {
  all() {
    const url = fullURL('api/v1/partners')
    return fetch(url).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
  },

  update(id, partner, token) {
    const url = fullURL('api/v1/partners')
    if (token === null) {
      throw new Error('Неавторизованный запрос!')
    } else {
      return fetch(url, {
        method: id === 'new' ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Auth-Token': token
        },
        body: queryString.stringify({
          payload: JSON.stringify(partner)
        })
      }).then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      }).then(r => r.status)
    }
  },

  delete(id, token) {
    const url = fullURL(`api/v1/partners/${id}`)
    if (token === null) {
      throw new Error('Неавторизованный запрос!')
    } else {
      return fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Auth-Token': token
        }
      }).then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }
        return response.json()
      }).then(r => r.status)
    }
  }
}
