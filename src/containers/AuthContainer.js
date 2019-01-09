import { h } from 'preact'
import Auth from '../components/popups/auth'

import { connect } from 'preact-redux'


const mapStateToProps = () => ({
  error: false
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(login, pass) {
    console.log(login, pass)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
