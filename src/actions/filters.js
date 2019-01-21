export const FILTER_CHANGE = 'FILTER_CHANGE'
export const FILTER_RESET = 'FILTER_RESET'
export const FILTERS_RESET = 'FILTERS_RESET'

export const resetFilter = (filter) => ({type: FILTER_RESET, filter})
export const resetFilters = () => ({type: FILTERS_RESET})
export const changeFilter = (filter, value) => ({
  type: FILTER_CHANGE, filter, value
})
