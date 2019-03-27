const baseURL = getBaseURL()
const fullURL = url => baseURL + url

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost' ?
      'https://xn----7sbkdfaj3cd0c0g8a.xn--80asehdb/api/' : '/api/'
  } else {
    return 'http://localhost:3000/'
  }
}

export default fullURL
