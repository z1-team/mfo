import { h } from 'preact'
import { connect } from 'preact-redux'
import { isLoggedIn } from '../selectors/auth'
import Redirect from '../components/redirect'

const restrictedArea = ['/moderate']

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state)
})

export const Guard = ({url, isLoggedIn}) => {
  if (restrictedArea.indexOf(url) !== -1) {
    return !isLoggedIn ? <Redirect to="/" /> : null
  }
  return null
}

export default connect(mapStateToProps)(Guard)
