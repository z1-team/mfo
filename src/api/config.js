const baseURL = getBaseURL()
const fullURL = url => baseURL + url

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return window.location.hostname === 'localhost' ?
      'http://localhost:3000/' : '/'
  } else {
    return 'http://localhost:3000/'
  }
}

export default fullURL
