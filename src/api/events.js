import queryString from 'querystring'
import fullURL from './config'

export default {
  send(event) {
    return fetch('https://wtfgames.ru/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(event)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  }
}
