import fullURL from './config'

export default {
  send(answer) {
    return fetch(fullURL('v1/answers'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(answer)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    }).then(r => r.status)
  }
}
