import { h, Component } from 'preact'
import Results from '../components/results'
import { getSortedPartners } from '../selectors/partners'
import { getLinksTail } from '../selectors/session'
import { isLoggedIn } from '../selectors/auth'
import { connect } from 'preact-redux'
import { createPartner, fetchPartners,
  selectPartner } from '../actions/partners'

const mapStateToProps = (state, {partners}) => ({
  tail: getLinksTail(state),
  isLoggedIn: isLoggedIn(state),
  partners: getSortedPartners(state, {partners})
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
