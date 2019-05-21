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
    // dispatch(fetchPartners())
  },

  onOrder(id, title, source) {
    const event = clickOfferEvent(id, title, source)
    dispatch(sendEvent(event))

    if (typeof window.ym === 'function') {
      ym(50978069, 'reachGoal', 'PARTNER_LINK')
    }
  },

  onEdit(id) {
    dispatch(selectPartner(id))
  },

  onMore(id, title) {
    const event = offerDetailsEvent(id, title)
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
