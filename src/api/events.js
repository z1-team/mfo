import queryString from 'querystring'
import fullURL from './config'

export default {
  send(event) {
    const url = fullURL('api/v1/event')
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: queryString.stringify({
        ...event,
        payload: JSON.stringify(event.payload)
      })
    }).then((responce) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  }
}
