import queryString from 'querystring'
import { detect } from 'detect-browser'
import uuid from 'uuid-js'
import api from '../api'
import { sendEvent, enterLandingEvent } from './events'
import { fetchABTest } from './abtests'

export const SESSION_INIT = 'SESSION_INIT'
export const SESSION_ERROR = 'SESSION_ERROR'
export const SESSION_UPDATE = 'SESSION_UPDATE'

function getABTests() {
  const saved = localStorage.getItem('abTests')
  return saved ? JSON.parse(saved) : {}
}

function getUserId() {
  const saved = localStorage.getItem('user_id')
  if (!saved) {
    const userId = uuid.create().toString()
    localStorage.setItem('user_id', userId)
    return userId;
  }
  return saved
}

function makeSession() {
  const query = typeof window !== 'undefined'
    ? queryString.parse(window.location.search.substr(1))
    : {}
  return {
    query,
    ipInfo: null,
    userId: getUserId(),
    browser: detect() || 'unknown',
    abTests: getABTests()
  }
}

function getBotTest() {
  const groups = ['g0', 'g1']
  const values = ['appVariant0', 'appVariant1']
  const isAssigned = !!localStorage.getItem('botAppAssigned')
  const generated = Math.random() > 0.5 ? 1 : 0
  const saved = parseInt(localStorage.getItem('botApp'))
  const index = saved ? saved : generated
  if (!saved) {
    localStorage.setItem('botApp', index)
  }
  return {
    isAssigned,
    value: {
      testName: 'botApp',
      groupName: groups[index],
      testValue: values[index]
    }
  }
}

async function assignTest(clientId, testValue) {
  const status = await api.tests.save({
    ...testValue, clientId
  })
  localStorage.setItem('botAppAssigned', 'true')
}

function getClientId() {
  let numberOfTries = 0
  return new Promise((resolve, reject) => {
    function waitForId() {
      const counter = typeof window !== 'undefined'
        ? window.yaCounter50978069 : false
      if (counter && counter.getClientID) {
        resolve(counter.getClientID())
      } else if (numberOfTries++ < 50) {
        setTimeout(waitForId, 200)
      } else {
        reject(new Error('Истекло время ожидания Яндекс.Метрики'))
      }
    }
    waitForId()
  })
}

async function initGeoLocation(dispatch) {
  try {
    const ipInfo = await api.geolocation.info()
    dispatch({type: SESSION_UPDATE, field: 'ipInfo', value: ipInfo})
  } catch (error) {
    dispatch({type: SESSION_ERROR, error})
  }
}

export function initSession() {
  return async (dispatch, getState) => {
    const session = makeSession()
    const test = getBotTest()
    dispatch({type: SESSION_INIT, session})
    initGeoLocation(dispatch)
    try {
      const clientId = await getClientId()
      console.log(clientId)
      if (!test.isAssigned) {
        console.log('Assign test for this client')
        assignTest(clientId, test.value)
      }
      dispatch({type: SESSION_UPDATE, field: 'clientId', value: clientId})
      dispatch(sendEvent(enterLandingEvent()))
    } catch (error) {
      dispatch({type: SESSION_ERROR, error})
    }
  }
}
