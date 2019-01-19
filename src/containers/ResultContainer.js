import { h, Component } from 'preact'
import Results from '../components/results'
import { getSomePartners, hasMore } from '../selectors/partners'
import { getLinksTail } from '../selectors/session'
import { isLoggedIn } from '../selectors/auth'
import { connect } from 'preact-redux'
import { createPartner, fetchPartners,
  selectPartner, nextPartners } from '../actions/partners'
import { sendEvent, clickOfferEvent,
  offerDetailsEvent } from '../actions/events'

const mapStateToProps = (state, {partners}) => ({
  tail: getLinksTail(state),
  isLoggedIn: isLoggedIn(state),
  isFetching: state.partners.isFetching,
  partners: getSomePartners(state, {partners}),
  hasMore: hasMore(state, {partners})
})

const mapDispatchToProps = (dispatch, {partners: type}) => ({
  onEnter() {
    dispatch(fetchPartners())
  },

  onOrder(partner) {
    const event = clickOfferEvent(partner.id, partner.main.title)
    dispatch(sendEvent(event))
  },

  onEdit(id) {
    dispatch(selectPartner(id))
  },

  onMore(id, title) {
    const event = offerDetailsEvent(partner.id, partner.main.title)
    dispatch(sendEvent(event))
  },

  onAdd() {
    dispatch(createPartner(type))
  },

  onScroll() {
    dispatch(nextPartners(8))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
