import { h, Component } from 'preact'
import Results from '../components/results'
import { getSortedPartners } from '../selectors/partners'
import { connect } from 'preact-redux'

const mapStateToProps = (state, {partners}) => ({
  tail: '?illbeback',
  isLoggedIn: false,
  partners: getSortedPartners(state, {partners})
})

const mapDispatchToProps = (dispatch) => ({
  onOrder(partner) {
    console.log(partner)
  },
  onEdit(id) {
    console.log(id)
  },
  onMore(id, title) {
    console.log(id, title)
  }
})

export default connect(mapStateToProps)(Results)
