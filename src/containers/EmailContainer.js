import { h } from 'preact'
import Email from '../components/popups/email'

import { connect } from 'preact-redux'

import { closePopup } from '../actions/popup'

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email) {
    console.log(email)
  },
  onClose() {
    dispatch(closePopup())
  }
})

export default connect(null, mapDispatchToProps)(Email)
