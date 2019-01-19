import { h, Component } from 'preact'
import Filters from '../components/filters'

import { getActual, getTotalCount } from '../selectors/partners'
import { getFilters } from '../selectors/filters'
import { getCity } from '../selectors/session'
import { connect } from 'preact-redux'
import { changeFilter } from '../actions/filters'
import { sendEvent, changeFilterEvent } from '../actions/events'

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
    dispatch(sendEvent(changeFilterEvent(name, JSON.stringify(value))))
    // window.scrollTo({
    //     top: document.getElementById('results').getBoundingClientRect().top + window.pageYOffset - 100,
    //     behavior: "smooth"
    // })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
