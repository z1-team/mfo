export const SORTING_CHANGE = 'SORTING_CHANGE'
export const SORTING_RESET = 'SORTING_RESET'

export const resetSorting = () => ({type: SORTING_RESET})
export const changeSorting = (sortBy, order) => ({
  type: SORTING_CHANGE, sortBy, order
})
