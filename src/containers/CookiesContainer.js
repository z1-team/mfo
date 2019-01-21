import { h } from 'preact'
import { connect } from 'preact-redux'

import Cookie from '../components/cookie'

const mapDispatchToProps = (dispatch) => ({
  onAccept() {
    setTimeout(function() {
      localStorage.setItem('agreeWithCookie', true)
    }, 300)
  }
})

export default connect(
  null,
  mapDispatchToProps
)(Cookie)
