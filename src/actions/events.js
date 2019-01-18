import { sessionInfo } from '../selectors/session'
import { authToken } from '../selectors/auth'
import api from '../api'

function getDateTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const f = v => v < 10 ? '0' + v : v
  return {
    local: `${year}-${f(month)}-${f(day)} ${f(hours)}:${f(minutes)}:${f(seconds)}`,
    utcDateTime: date.toISOString().slice(0, 19).replace('T', ' '),
    utcDate: date.toISOString().slice(0, 10)
  }
}

function fullEvent(event, state) {
  console.log('!!!', state)
  const datetime = getDateTime()
  return {
    ...event,
    ...sessionInfo(state),
    date: datetime.utcDate,
    datetime: datetime.utcDateTime,
    localtime: datetime.local
  }
}

function fullEvent(event, state) {
  const datetime = getDateTime()
  const session = state.session
  return {
    ...event,
    ...sessionInfo(state),
    payload: {
      ...event.payload,
      utm_term: session.query.utm_term || 'NULL',
      utm_medium: session.query.utm_medium || 'NULL',
      utm_content: session.query.utm_content || 'NULL',
      utm_gbid: session.query.utm_gbid || 'NULL',
      utm_phrase: session.query.utm_phrase || 'NULL',
      utm_gender: session.query.utm_gender || 'NULL',
      utm_age: session.query.utm_age || 'NULL'
    },
    date: datetime.utcDate,
    datetime: datetime.utcDateTime,
    localtime: datetime.local
  }
}

export function sendEvent(event) {
  return async (dispatch, getState) => {
    const state = getState()
    const token = authToken(state)
    if (token === null) {
      try {
        const status = await api.events.send(fullEvent(event, state))
        console.log(status)
      } catch (error) {
        console.error(error)
      }
    } else {
      console.log('NOTE: Skipping sending events for admins')
    }
  }
}
