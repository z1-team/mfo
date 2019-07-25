import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Footer from '../components/footer'
import { isLoggedIn } from '../selectors/auth'
import { openPopup } from '../actions/popup'
import { logout } from '../actions/auth'

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
  theme: state.session.theme
})

const mapDispatchToProps = (dispatch) => ({
  onLogin(isLoggedIn) {
    if(!isLoggedIn) {
      dispatch(openPopup('login'))
    } else {
      dispatch(logout())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
