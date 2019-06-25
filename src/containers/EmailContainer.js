import { h } from 'preact'
import Email from '../components/popups/email'
import { connect } from 'preact-redux'
import { closePopup } from '../actions/popup'
import { subscribeEmail } from '../actions/subscribe'

const mapStateToProps = (state, {theme}) => ({
  theme
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email) {
    dispatch(subscribeEmail(email))
    localStorage.setItem('subscribed', true)
  },
  onClose() {
    dispatch(closePopup())
  }
})

export default connect(null, mapDispatchToProps)(Email)
