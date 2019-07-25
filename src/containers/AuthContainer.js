import { h } from 'preact'
import { connect } from 'preact-redux'
import Auth from '../components/popups/auth'
import { isErrorOccurred } from '../selectors/auth'
import { login } from '../actions/auth'

const mapStateToProps = (state) => ({
  error: isErrorOccurred(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(accountLogin, accountPassword) {
    dispatch(login(accountLogin, accountPassword))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
