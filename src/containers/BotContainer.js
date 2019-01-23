import { h } from 'preact'
import { connect } from 'preact-redux'

import { answerBot } from '../actions/bot'

import JustBot from '../components/smart-test/bot'

const mapStateToProps = ({bot}) => ({
  answers: bot.answers
})

const mapDispatchToProps = (dispatch, {onEnd}) => ({
  onEnd() {
    onEnd()
  },
  onAnswer(answer) {
    dispatch(answerBot(answer))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(JustBot)
