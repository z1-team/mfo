const baseURL = getBaseURL()
const fullURL = url => baseURL + url

function getBaseURL() {
  if (typeof window !== 'undefined') {
    return 'https://api.xn----7sbkdfaj3cd0c0g8a.xn--80asehdb/'
  } else {
    return 'http://localhost:3000/'
  }
}

export default fullURL
