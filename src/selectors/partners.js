import { createSelector } from 'reselect'
import Filtration from './helpers/filters'
import sortResults from './helpers/sorting'
import { isLoggedIn } from './auth'
import { getFilters } from './filters'
import { getSortInfo } from './sorting'

const getPartnersIdsByType = (state, {partners: type}) => state.partners[type] || []
const getPartnersData = (state) => state.partners.data

export const getFiltration = createSelector(
  [
    getPartnersIdsByType, getPartnersData,
    getFilters, isLoggedIn
  ],
  (ids, partners, filters, isLoggedIn) => {
    const filtration = new Filtration(ids, partners, filters, isLoggedIn)
    return {
      actual: filtration.actualFilters(),
      filtered: filtration.filter()
    }
  }
)

export const getActual = createSelector(
  [getFiltration], ({actual}) => actual
)

export const getTotalCount = createSelector(
  [getFiltration], ({filtered}) => filtered.length
)

export const getFilteredPartners = createSelector(
  [getFiltration, getPartnersData], ({filtered}, partners) => filtered.map(id => partners[id])
)

export const getSortedPartners = createSelector(
  [getPartnersData, getFiltration, getSortInfo],
  (partners, {filtered}, sortInfo) =>
    sortResults(filtered, partners, sortInfo).map(id => partners[id])
)
