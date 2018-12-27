import fullURL from './config'

export default {
  assign(banner, clientId) {
    const url = fullURL(`api/v1/test/${clientId}${banner}`)
    fetch(url).then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server')
      }
      return response.json()
    })
  }
}
