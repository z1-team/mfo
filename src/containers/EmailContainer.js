import { h } from 'preact'
import Email from '../components/popups/email'

import { connect } from 'preact-redux'

const mapDispatchToProps = (dispatch) => ({
  onSubmit(email) {
    console.log(login)
  }
})

export default connect(null, mapDispatchToProps)(Email)
