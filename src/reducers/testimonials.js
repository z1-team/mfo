import { TESTIMONIALS_FETCH_NEW, TESTIMONIALS_FETCH,
  TESTIMONIAL_PUBLIC, TESTIMONIAL_DELETE } from '../actions/testimonials'

const initialState = {
  isFetching: false,
  unpublished: [],
  partnerId: null,
  selected: [],
  data: {}
}

const without = (data, id) => (
  Object.getOwnPropertyNames(data).reduce((result, item) => {
    if (item !== id) {
      result[item] = data[item]
    }
    return result
  }, {})
)

const load = (items) => items.reduce((result, item) => {
  result[item.id] = item
  return result
}, {})

const ids = ({id}) => id

function fetchNewReducer(state, {status, testimonials}) {
  switch (status) {
    case 1:
      return {...state, isFetching: true}
    case 2:
      return {
        ...state,
        isFetching: false,
        unpublished: testimonials.map(ids),
        data: {...state.data, load(testimonials)}
      }
    case 0:
      return {...state, isFetching: false}
    default:
      return state
  }
}

function fetchReducer(state, {status, testimonials, partnerId}) {
  switch (status) {
    case 1:
      return {...state, isFetching: true, partnerId}
    case 2:
      return {
        ...state,
        isFetching: false,
        selected: testimonials.map(ids),
        data: {...state.data, load(testimonials)}
      }
    default:
      return state
  }
}

function deleteReducer(state, {status, id}) {
  const isNotThis = _id => _id !== id
  switch (status) {
    case 1:
      return {
        ...state,
        unpublished: state.unpublished.filter(isNotThis),
        selected: state.selected.filter(isNotThis)
        data: without(state.data, id)
      }
    default:
      return state
  }
}

function testimonialsReducer(state = initialState, action) {
  switch (action.type) {
    case TESTIMONIALS_FETCH_NEW:
      return fetchNewReducer(state, action)
    case TESTIMONIALS_FETCH:
      return fetchReducer(state, action)
    case TESTIMONIAL_PUBLIC:
    case TESTIMONIAL_DELETE:
      return deleteReducer(state, action)
    default:
      return state
  }
}

export default testimonialsReducer
