import queryString from 'querystring'
import fullURL from './config'

export default {
  add(subscription, clientId) {
    const url = fullURL('v1/save-subscriber')
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: queryString.stringify({
        client_id: clientId,
        subscription: JSON.stringify(subscription)
      })
    }).then((responce) => {
      if (responce.ok) {
        return responce.json()
      }
    }).then((data) => {
      console.log('Подписка оформлена: ', data)
    })
  }
}
