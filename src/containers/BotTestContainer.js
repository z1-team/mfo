import { h } from 'preact'
import { connect } from 'preact-redux'

import { showBot } from '../selectors/session'

import Main from '../routes/main'
import SmartTest from '../components/smart-test'

const BotTestContainer = ({showBot, partners}) => (
  showBot ? <SmartTest />
    : <Main partners={partners}/>
)

const mapStateToProps = (state, {partners}) => ({
  showBot: showBot(state),
  partners
})

export default connect(mapStateToProps)(BotTestContainer)
