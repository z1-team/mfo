import { h } from 'preact'
import { connect } from 'preact-redux'

import { answerBot } from '../actions/bot'
import { botAnswerEvent, sendEvent } from '../actions/events'

import JustBot from '../components/smart-test/bot'

const mapStateToProps = ({bot}) => ({
  answers: bot.answers
})

const mapDispatchToProps = (dispatch, {onEnd}) => ({
  onEnd() {
    onEnd()
  },
  onAnswer(answerId, question, answer) {
    const event = botAnswerEvent(question, answer)
    dispatch(answerBot(answerId))
    dispatch(sendEvent(event))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JustBot)
