import { createSelector } from 'reselect'
import Filtration from './helpers/filters'
import sortResults from './helpers/sorting'
import { isLoggedIn } from './auth'
import { getFilters } from './filters'
import { getSortInfo } from './sorting'

export const getPartnersIdsByType = (state, {partners: type}) => state.partners[type] || []
export const getPartnersData = (state) => state.partners.data
export const getSelectedPartner = ({partners: p}) => p.data[p.selected] || null
export const getCardsCount = ({partners}) => partners.cardsCount

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

export const getSomePartners = createSelector(
  [getCardsCount, getSortedPartners],
  (count, partners) => partners.slice(0, Math.min(partners.length, count))
)

export const hasMore = createSelector(
  [getSomePartners, getSortedPartners],
  (some, all) => all.length > some.length
)
