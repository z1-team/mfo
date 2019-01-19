const isRadio = {
  special_offers: false,
  summ: false,
  review_time: true,
  get_money_time: true,
  income_proof: true,
  credit_history: true,
  get_ways: false,
  repayment_options: false,
  age: false,
  mob_app: true,
  payment_system: false,
  validity: false,
  limits: true,
  grace_period: true,
  cashback: true,
  consideration_time: false,
  card_delivery: true,
  time_delivery: false,
  chip_availability: true,
  secure_3d: true
}

function findIntersection(collections) {
  const isInCollection = (id, name) => collections[name].indexOf(id) !== -1
  return collections ? Object.getOwnPropertyNames(collections)
    .reduce((residue, filterName) => {
      if (residue === 0) {
        return collections[filterName]
      } else {
        return residue.filter(id => isInCollection(id, filterName))
      }
    }, 0) : {}
}

const isPublished = ({main}) => (
  typeof main.isPublished === 'undefined'
    ? true : main.isPublished
)

const testRange = (value, range) => (
  value !== null ? range[0] <= value && value <= range[1] : true
)

function testRangeFilter(partner, value, rangeName) {
  const range = partner.filter_values[rangeName]
  return range ? testRange(value, range) : true
}

function testBoolFilter(filter, value) {
  if (filter.every(f => f === false)) {
    return true
  } else {
    return filter.some((f, i) => f && value[i])
  }
}

function testFilter(partner, filterName, filterValue) {
  switch(filterName) {
    case 'summ_value':
      return testRangeFilter(partner, filterValue, 'summ')
    case 'term_value':
      return testRangeFilter(partner, filterValue, 'term')
    case 'limit_value':
      return testRangeFilter(partner, filterValue, 'limit')
    case 'rate_value':
      return testRangeFilter(partner, filterValue, 'rate')
    default:
      return partner.filters[filterName]
        ? testBoolFilter(filterValue, partner.filters[filterName])
        : true
  }
}

const withValue = n => `${n}_value`
const zeros = items => items.map(i => 0)

class FiltrationCore {
  constructor(ids, partners, filters, isLoggedIn) {
    this.ids = ids
    this.partners = partners
    this.filters = filters
    this.isLoggedIn = isLoggedIn
    this.collections = this.makeCollections()
  }

  allFiltersNames() {
    const {partners, ids} = this
    if (ids.length > 0) {
      const boolFilters = partners[ids[0]].filters
      const valueFilters = partners[ids[0]].filter_values
      const valueFiltersNames = Object.getOwnPropertyNames(valueFilters).map(withValue)
      return Object.getOwnPropertyNames(boolFilters).concat(valueFiltersNames)
    } else {
      return []
    }
  }

  makeCollections() {
    return this.allFiltersNames().reduce((harvest, filterName) => (
      this.harvestFilters(harvest, filterName, this.filters[filterName])
    ), {})
  }

  harvestFilters(harvest, filterName, filterValue) {
    harvest[filterName] = this.applyFilter(filterName, filterValue)
    return harvest
  }

  interestingFilters() {
    if(this.ids.length > 0 && this.partners[this.ids[0]]) {
      return Object.getOwnPropertyNames(this.partners[this.ids[0]].filters)
    }
    return []
  }

  filterValue(filterName) {
    return this.filters[filterName]
  }

  testActual(selected, filterName, filterValue) {
    const test = filterValue.map((value, i) => (
      i === selected ? true : isRadio[filterName] ? false : value
    ))
    return findIntersection({
      ...this.collections,
      [filterName]: this.applyFilter(filterName, test)
    }).length
  }

  filterActual(filterName, filterValue) {
    return filterValue.reduce((actual, value, index) => {
      actual[index] = this.testActual(index, filterName, filterValue)
      return actual
    }, zeros(filterValue))
  }

  applyFilter(filterName, filterValue) {
    const {ids, partners, isLoggedIn} = this
    return ids.filter(id => {
      const partner = partners[id]
      if(!isPublished(partner) && !isLoggedIn) {
        return false
      }
      return testFilter(partner, filterName, filterValue)
    })
  }
}

class Filtration extends FiltrationCore {
  constructor(ids, partners, filters, isLoggedIn) {
    super(ids, partners, filters, isLoggedIn)
  }

  filter() {
    return findIntersection(this.collections)
  }

  actualFilters() {
    return this.interestingFilters().reduce((actual, filterName) => {
      actual[filterName] = this.filterActual(filterName, this.filterValue(filterName))
      return actual
    }, {})
  }
}

export default Filtration
