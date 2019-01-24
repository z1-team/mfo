import { queryParam, getDateTime, utmExtraValues } from './events'
import api from '../api'

export const BOT_ANSWERS = 'BOT_ANSWERS'

const makeAnswerEvent = (question, answer, session) => {
  const datetime = getDateTime()
  return {
    question,
    answer,
    clientId: session.clientId || null,
    utmCampaign: queryParam('utm_campaign', session),
    utmExtraValues: utmExtraValues(session),
    eventDate: datetime.utcDate,
    eventDateTime: datetime.utcDateTime
  }
}

export function answerBot(question, answer, answerId) {
  return async (dispatch, getState) => {
    const event = makeAnswerEvent(question, answer, getState().session)
    dispatch({type: BOT_ANSWERS, answer: answerId})
    try {
      const status = api.answers.send(event)
    } catch (error) {
      console.log(error)
    }
  }
}
