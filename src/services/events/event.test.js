import {makeFullEvent} from './event'
import MockDate from 'mockdate'

describe('makeFullEvent(event, session)', () => {
  const testSession = {
    clientId: '15438951893932',
    query: {
      utm_campaign: '12300987',
      yclick_id: '1234567890',
      utm_source: 'yandex',
      utm_gbid: '7867465563',
      utm_content: '598857463345',
      utm_content2: 'ad_2',
      utm_term: 'MESOWG',
      utm_img: 'none',
      utm_phrase: '678456',
      utm_region_id: 'none',
      utm_region: 'Курская область',
      utm_gender: 'women',
      utm_age: '18-24',
      utm_device: 'desktop',
      utm_device_target: 'pc'
    },
    ipInfo: {
      ip: '192.168.1.1',
      city: 'Кызыл',
      region: 'Тува',
      country: 'Россия'
    },
    theme: 'day',
    userId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
    browser: {
      name: 'Firefox',
      version: '72.0',
      os: 'Linux'
    }
  }

  const poorSession = {
    clientId: '15438951893932',
    query: {
      utm_campaign: '12300987'
    },
    ipInfo: 'Кызыл',
    theme: null,
    userId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
    browser: 'Firefox'
  }
  
  const badClientId = {
    clientId: null,
    query: {
      utm_campaign: '12300987'
    },
    ipInfo: 'Кызыл',
    theme: null,
    userId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
    browser: 'Firefox'
  }
  
  const badUtmCampaign = {
    clientId: '15438951893932',
    query: {
    },
    ipInfo: 'Кызыл',
    theme: null,
    userId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
    browser: 'Firefox'
  }
  
  const badQuery = {
    clientId: '15438951893932',
    ipInfo: 'Кызыл',
    theme: null,
    userId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
    browser: 'Firefox'
  }
  
  beforeAll(() => {
    MockDate.set('2019-01-30 14:47:00', 7)
  })
  
  afterAll(() => {
    MockDate.reset()  
  })

  test('Создаёт простое событие', () => {
    const actual = makeFullEvent({name: 'enter_landing'}, testSession)
    expect(actual).toEqual(extendEvent({
      EventName: 'enter_landing'
    }))
  })
  
  test('Работает с неполной сессией', () => {
    const actual = makeFullEvent({name: 'enter_landing'}, poorSession)
    expect(actual).toEqual({
      EventName: 'enter_landing',
      ClientId: '15438951893932',
      UtmCampaign: '12300987',
      EventDate: '2019-01-30',
      EventDateTime: '2019-01-30 07:47:00',
      UserCity: 'Кызыл',
      UserLocalTime: '2019-01-30 14:47:00',
      Theme: 'Default',
      UserId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
      BrowserName: 'Firefox',
      EventVersion: 2
    })
  })
  
  test('Возвращает null, если сессия совсем неполная', () => {
    const actualA = makeFullEvent({name: 'enter_landing'}, badClientId)
    const actualB = makeFullEvent({name: 'enter_landing'}, badUtmCampaign)
    const actualC = makeFullEvent({name: 'enter_landing'}, badQuery)
    expect(actualA).toBe(null)
    expect(actualB).toBe(null)
    expect(actualC).toBe(null)
  })
  
  test('Создаёт событие click_offer', () => {
    const actual = makeFullEvent({
      name: 'click_offer',
      data: {id: 'ck668k2po000001l7454qfpt4', name: 'goldmine', source: 'button'}
    }, testSession)
    expect(actual).toEqual(extendEvent({
      EventName: 'click_offer',
      ClickOfferId: 'ck668k2po000001l7454qfpt4',
      ClickOfferName: 'goldmine',
      ClickOfferSource: 'button',
    }))
  })
  
  test('Создаёт событие offer_details', () => {
    const actual = makeFullEvent({
      name: 'offer_details',
      data: {id: 'ck668k2po000001l7454qfpt4', name: 'goldmine'}
    }, testSession)
    expect(actual).toEqual(extendEvent({
      EventName: 'offer_details',
      OfferDetailsId: 'ck668k2po000001l7454qfpt4',
      OfferDetailsName: 'goldmine'
    }))
  })
  
  test('Создаёт событие change_filter', () => {
    const actual = makeFullEvent({
      name: 'change_filter',
      data: {filterName: 'producer', filterValue: 'z1'}
    }, testSession)
    expect(actual).toEqual(extendEvent({
      EventName: 'change_filter',
      FilterName: 'producer',
      FilterValue: 'z1'
    }))
  })
  
  test('Создаёт событие change_direction', () => {
    const actual = makeFullEvent({
      name: 'change_direction',
      data: {direction: '/mfo'}
    }, testSession)
    expect(actual).toEqual(extendEvent({
      EventName: 'change_direction',
      Direction: '/mfo'
    }))
  })
  
  function extendEvent(extraData) {
    return {
      YClickId: '1234567890',
      ClientId: '15438951893932',
      UtmCampaign: '12300987',
      UtmSource: 'yandex',
      UtmGbid: '7867465563',
      UtmContent: '598857463345',
      UtmContent2: 'ad_2',
      UtmTerm: 'MESOWG',
      UtmImg: 'none',
      UtmPhrase: '678456',
      UtmRegionId: 'none',
      UtmRegion: 'Курская область',
      UtmGender: 'women',
      UtmAge: '18-24',
      UtmDevice: 'desktop',
      UtmDeviceTarget: 'pc',
      EventDate: '2019-01-30',
      EventDateTime: '2019-01-30 07:47:00',
      UserIP: '192.168.1.1',
      UserRegion: 'Тува',
      UserCity: 'Кызыл',
      UserLocalTime: '2019-01-30 14:47:00',
      Theme: 'Day',
      UserCountry: 'Россия',
      UserId: 'e1f9c8c8-563b-463f-a98a-84a035589f1a',
      BrowserName: 'Firefox',
      BrowserVersion: '72.0',
      BrowserOS: 'Linux',
      EventVersion: 2,
      ...extraData
    }
  }
})

