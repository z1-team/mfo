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
    console.log('Go to partner: ', partner)
  },

  onEdit(id) {
    dispatch(selectPartner(id))
  },

  onMore(id, title) {
    console.log('Discover partner: ', id, title)
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
