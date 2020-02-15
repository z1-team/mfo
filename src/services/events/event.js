const themeNames = {
  unknown: 'Default',
  day: 'Day',
  night: 'Night'
}

export function makeFullEvent(event, session) {
  if (session.clientId === null) {
    return null
  }
  
  if (typeof session.query !== 'object' || typeof session.query.utm_campaign === 'undefined') {
    return null
  }
  
  const ipInfo = getIpInfo(session)
  const browser = getBrowserInfo(session)
  const datetime = getDateTime(session)
  
  return removeNullProps({
    EventName: event.name,
    YClickId: session.query.yclick_id,
    ClientId: session.clientId,
    UtmCampaign: session.query.utm_campaign,
    UtmSource: session.query.utm_source,
    UtmGbid: session.query.utm_gbid,
    UtmContent: session.query.utm_content,
    UtmContent2: session.query.utm_content2,
    UtmTerm: session.query.utm_term,
    UtmImg: session.query.utm_img,
    UtmPhrase: session.query.utm_phrase,
    UtmRegionId: session.query.utm_region_id,
    UtmRegion: session.query.utm_region,
    UtmGender: session.query.utm_gender,
    UtmAge: session.query.utm_age,
    UtmDevice: session.query.utm_device,
    UtmDeviceTarget: session.query.utm_device_target,
    ClickOfferId: getExtraParam(event, 'click_offer', 'id'),
    ClickOfferName: getExtraParam(event, 'click_offer', 'name'),
    ClickOfferSource: getExtraParam(event, 'click_offer', 'source'),
    OfferDetailsId: getExtraParam(event, 'offer_details', 'id'),
    OfferDetailsName: getExtraParam(event, 'offer_details', 'name'),
    FilterName: getExtraParam(event, 'change_filter', 'filterName'),
    FilterValue: getExtraParam(event, 'change_filter', 'filterValue'),
    Direction:  getExtraParam(event, 'change_direction', 'direction'),
    EventDate: datetime.utcDate,
    EventDateTime: datetime.utcDateTime,
    UserIP: ipInfo.ip,
    UserRegion: ipInfo.region,
    UserCity: ipInfo.city,
    UserLocalTime: datetime.local,
    Theme: getThemeName(session.theme),
    UserCountry: ipInfo.country,
    UserId: session.userId,
    BrowserName: browser.name,
    BrowserVersion: browser.version,
    BrowserOS: browser.os,
    EventVersion: 2
  })
}

function getExtraParam(event, name, param) {
  if (event.name === name) {
    return event.data[param]
  }
  return undefined
}

function getThemeName(theme) {
  return themeNames[theme] || themeNames.unknown
}

function removeNullProps(value) {
  return Object.getOwnPropertyNames(value)
    .reduce((result, prop) => {
      if (value[prop] !== undefined) {
        result[prop] = value[prop]
      }
      return result
    }, {})
}

function getIpInfo(session) {
  if (typeof session.ipInfo === 'object' && session.ipInfo !== null) {
    return session.ipInfo
  } else if (typeof session.ipInfo === 'string') {
    return {
      city: session.ipInfo
    }
  }
  return {}
}

function getBrowserInfo(session) {
  if (typeof session.browser === 'object') {
    return session.browser
  } else if (typeof session.browser === 'string') {
    return {
      name: session.browser
    }
  }
  return undefined
}

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
    local: `${year}-${f(month + 1)}-${f(day)} ${f(hours)}:${f(minutes)}:${f(seconds)}`,
    utcDateTime: date.toISOString().slice(0, 19).replace('T', ' '),
    utcDate: date.toISOString().slice(0, 10)
  }
}
