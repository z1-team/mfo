import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Footer from '../components/footer'
import { isLoggedIn } from '../selectors/auth'
import { openPopup } from '../actions/popup'

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogin(event) {
    event.preventDefault()
    dispatch(openPopup('login'))
  }
})

export default connect(mapStateToProps)(Footer)
