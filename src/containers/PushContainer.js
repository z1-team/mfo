import { h } from 'preact'
import { connect } from 'preact-redux'

import PushNotification from '../components/push-notification'

const mapStateToProps = () => ({
  isOpen: true
})

const mapDispatchToProps = () => ({
  onAccept() {

  },
  onDecline() {
    
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PushNotification)
