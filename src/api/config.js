const baseURL = getBaseURL()
const fullURL = url => baseURL + url

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost' ?
      'https://api.xn----7sbkdfaj3cd0c0g8a.xn--80asehdb/' : '/api/'
  } else {
    return 'http://localhost:3000/'
  }
}

export default fullURL
