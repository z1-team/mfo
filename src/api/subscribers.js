import queryString from 'querystring'
import fullURL from './config'

export default {
  add(clientId, email) {
    const url = fullURL('v1/subscribe')
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: queryString.stringify({
        email, client_id: clientId
      })
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  }
}
