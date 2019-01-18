import { h } from 'preact'
import Filters from '../components/filters'

import { getActual, getTotalCount } from '../selectors/partners'
import { getFilters } from '../selectors/filters'
import { getCity } from '../selectors/session'
import { connect } from 'preact-redux'
import { changeFilter } from '../actions/filters'

const mapStateToProps = (state, {partners}) => ({
  url: partners,
  filters: getFilters(state),
  location: getCity(state),
  total: getTotalCount(state, {partners}),
  actual: getActual(state, {partners})
})

const mapDispatchToProps = (dispatch) => ({
  onChange(name, value) {
    dispatch(changeFilter(name, value))
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
