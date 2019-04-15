import { h } from 'preact'
import { connect } from 'preact-redux'
import PushNotification from '../components/push-notification'
import { pushAccept, pushDecline } from '../actions/session'
import { showPush } from '../selectors/session'

const mapStateToProps = (state) => ({
  isOpen: showPush(state)
})

const mapDispatchToProps = (dispatch) => ({
  onAccept() {
    dispatch(pushAccept())
  },
  onDecline(event) {
    event.preventDefault()
    dispatch(pushDecline())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PushNotification)
