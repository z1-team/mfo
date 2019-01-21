import fullURL from './config'

export default {
  save(data) {
    const url = fullURL(`v1/tests/botApp`)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
  }
}
