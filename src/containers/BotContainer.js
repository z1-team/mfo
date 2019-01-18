import { h } from 'preact'
import { connect } from 'preact-redux'

import JustBot from '../components/smart-test/bot'

const mapDispatchToProps = (dispatch, {onEnd}) => ({
  onEnd() {
    onEnd()
  }
})

export default connect(null, mapDispatchToProps)(JustBot)
