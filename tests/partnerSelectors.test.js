import { getFiltration, getSortedPartners } from '../src/selectors/partners'
import { partners, initialFilters } from './filters.test'

const initialState = {
  partners: {
    mfo: ['2', '3', '4'],
    cards: ['23', '24', '25'],
    data: partners
  },
  filters: {
    ...initialFilters,
    special_offers: [false, true]
  },
  auth: {
    token: 'sdfsgsdfghsefg345345'
  },
  sorting: {
    sortBy: 'summ',
    isSorted: false,
    isAscending: false
  }
}

const expectedActual = {
  special_offers: [2, 2],
  summ: [2, 2, 2, 2, 2, 2, 2],
  review_time: [2, 2, 2, 2],
  get_money_time: [2, 2, 2, 2],
  income_proof: [2, 2],
  credit_history: [2, 2],
  get_ways: [2, 2, 2, 2, 2, 2, 2],
  repayment_options: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  age: [2, 2, 2, 2, 2],
  mob_app: [2, 2],
  category_mfo: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
}

test('Проверка работы селектора', () => {
  const result = getFiltration(initialState, {partners: 'mfo'})
  expect(result.actual).toEqual(expectedActual)
  expect(result.filtered.length).toEqual(2)
  expect(result.filtered[0]).toEqual('2')
  expect(result.filtered[1]).toEqual('3')
})
