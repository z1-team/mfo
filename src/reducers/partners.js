import { PARTNERS_FETCH, PARTNER_UPDATE, PARTNER_SELECT,
  PARTNER_CREATE, PARTNER_DELETE, PARTNERS_NEXT } from '../actions/partners'
import { FILTER_CHANGE, FILTER_RESET } from '../actions/filters'
import templates from '../partnersTemplates'

const initialState = {
  cardsCount: 8,
  isFetching: false,
  selected: null,
  cards: [],
  credits: [],
  mfo: [],
  data: {}
}

const partnersOfType = (type, partners) => (
  partners.map(({id}) => id)
    .filter((el, index) => partners[index].type === type)
)

function deleteReducer(state, partnerId) {
  const isNotThis = id => id !== partnerId
  return {
    ...state,
    cards: state.cards.filter(isNotThis),
    credits: state.credits.filter(isNotThis),
    mfo: state.mfo.filter(isNotThis)
  }
}

function fetchReducer(state, action) {
  switch (action.status) {
    case 1:
      return {...state, isFetching: true}
    case 2:
      return {
        ...state,
        isFetching: false,
        mfo: partnersOfType('mfo', action.partners),
        credits: partnersOfType('credits', action.partners),
        cards: partnersOfType('cards', action.partners),
        data: action.partners.reduce((result, item) => {
          result[item.id] = item
          return result
        }, {})
      }
    case 0:
      return {...state, isFetching: false}
    default:
      return state
  }
}

function partnersReducer(state = initialState, action) {
  switch(action.type) {
    case PARTNERS_FETCH:
      return fetchReducer(state, action)
    case PARTNER_SELECT:
      return { ...state, selected: action.id}
    case PARTNER_UPDATE:
      return { ...state, data: {
        ...state.data,
        [action.id]: action.partner
      }}
    case PARTNER_CREATE:
      return { ...state, selected: 'new', data: {
        ...state.data,
        'new': templates[action.partnerType]
      }}
    case PARTNER_DELETE:
      return action.status === 1 ? deleteReducer(state, action.id) : state
    case FILTER_CHANGE:
    case FILTER_RESET:
      return { ...state, cardsCount: 8}
    case PARTNERS_NEXT:
      return { ...state, cardsCount: state.cardsCount + action.count}
    default:
     return state
  }
}

export default partnersReducer
