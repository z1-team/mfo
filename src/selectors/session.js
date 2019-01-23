import queryString from 'querystring'

const bannerId = {
  mw_all: 'bg0',
  m_all: 'bg1',
  w_all: 'bg6',
  m_18: 'bg2',
  m_25: 'bg3',
  m_35: 'bg4',
  m_45: 'bg5',
  w_18: 'bg7',
  w_25: 'bg8',
  w_35: 'bg9',
  w_45: 'bg10'
}

export const showPush = ({session}) => session.showPush

export const clientBanner = ({session}) => (
  session.query.utm_img ?
    bannerId[session.query.utm_img] || false : false
)

export const getCity = ({session}) => (
  session.ipInfo ? session.ipInfo.city : 'Ваш город'
)

export const getLinksTail = ({session}) => {
  const {query, userId, clientId} = session
  const tail = {}

  if (userId) {
    tail.user_id = userId
  }

  if (query.yclid) {
    tail.yclick_id = query.yclid
  }

  if (query.utm_campaign) {
    tail.utm_campaign = query.utm_campaign
  }

  if (clientId) {
    tail.client_id = clientId
  }

  return queryString.stringify(tail)
}

export const getABTests = ({session}) => session.abTests

export const getClientId = ({session}) => session.clientId || null

export const showBot = ({session}) => {
  if(session.botTest.groupName) {
    return session.botTest.groupName === 'g1'
  }

  return false
}
