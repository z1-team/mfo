import { h, Component } from 'preact'
import Results from '../components/results'
import { getSomePartners, hasMore } from '../selectors/partners'
import { getLinksTail } from '../selectors/session'
import { isLoggedIn } from '../selectors/auth'
import { connect } from 'preact-redux'
import { createPartner, fetchPartners,
  selectPartner, nextPartners } from '../actions/partners'

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
    dispatch(sendEvent({
      type: 'click_offer',
      payload: {
				partnerId: partner.id,
        partnerName: partner.main.title
      }
    }))
  },

  onEdit(id) {
    dispatch(selectPartner(id))
  },

  onMore(id, title) {
    dispatch(sendEvent({
      type: 'offer_details',
      payload: {
				partnerId: id,
        partnerName: title
      }
    }))
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
