import { SORTING_CHANGE, SORTING_RESET } from '../actions/sorting'

const initialState = {
  sortBy: 'summ',
  isSorted: false,
  isAscending: false
}

function sortingReducer(state = initialState, action) {
  switch (action.type) {
    case SORTING_CHANGE:
      return {
        isSorted: true,
        sortBy: action.sortBy,
        isAscending: state.sortBy === action.sortBy ?
          !state.isAscending : false
      }
    case SORTING_RESET:
      return initialState
    default:
      return state
  }
}

export default sortingReducer
