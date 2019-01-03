import Filtration from '../src/selectors/helpers/filters'
import partnersSource from './partners.json'

export const partners = partnersSource.reduce((result, item) => (
  result[item.id] = item, result
), {})

export const initialFilters = {
  category_mfo: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  category_cards: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  special_offers: [false, false],
  summ: [false, false, false, false, false, false, false],
  review_time: [false, false, false, false],
  get_money_time: [false, false, false, false],
  income_proof: [false, false],
  credit_history: [false, false],
  get_ways: [false, false, false, false, false, false, false],
  repayment_options: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
  age: [false, false, false, false, false],
  mob_app: [false, false],
  payment_system: [false, false, false],
  validity: [false, false, false, false],
  limits: [false, false, false, false, false],
  grace_period: [false, false, false, false],
  cashback: [false, false],
  consideration_time: [false, false, false, false, false],
  card_delivery: [false, false],
  time_delivery: [false, false, false],
  chip_availability: [false, false],
  secure_3d: [false, false],
  summ_value: null,
  term_value: null,
  limit_value: null,
  rate_value: null
}

describe('Тестирование фильтрации', () => {
  test('Фильтрация без фильтров работает', () => {
    const filtration = new Filtration(['2', '3', '4'], partners, initialFilters, true)
    expect(filtration.filter()).toContain('2', '3', '4')
  })
  test('Актуальные фильтры без фильтров работает', () => {
    const filters = {...initialFilters, term_value: 6}
    const filtration = new Filtration(['2', '3', '4'], partners, filters, true)
  })
  test('Фильтры по значениям работают', () => {
    const filters = {...initialFilters, term_value: 6}
    const filtration = new Filtration(['2', '3', '4'], partners, filters, true)
    expect(filtration.filter()).not.toContain('2', '3')
    expect(filtration.filter()).toContain('4')
  })
  test('Чекбокс фильтры работают', () => {
    const filters1 = {...initialFilters, special_offers: [false, true]}
    const filters2 = {...initialFilters, special_offers: [true, false]}
    const filters3 = {...initialFilters, special_offers: [true, true]}
    const filtration1 = new Filtration(['2', '3', '4'], partners, filters1, true)
    const filtration2 = new Filtration(['2', '3', '4'], partners, filters2, true)
    const filtration3 = new Filtration(['2', '3', '4'], partners, filters3, true)

    expect(filtration1.filter()).toContain('2', '3')
    expect(filtration1.filter()).not.toContain('4')

    expect(filtration2.filter()).not.toContain('2', '3')
    expect(filtration2.filter()).toContain('4')

    expect(filtration3.filter()).toContain('2', '3', '4')
  })
})
