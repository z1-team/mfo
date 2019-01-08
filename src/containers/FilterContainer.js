import { h, Component } from 'preact'
import Filters from '../components/filters'

import { getActual } from '../selectors/partners'
import { getFilters } from '../selectors/filters'
import { connect } from 'preact-redux'

const mapStateToProps = (state, {partners}) => ({
  url: partners,
  filters: getFilters(state),
  location: {city: "Луна"},
  total: 10,
  actual: getActual(state, {partners})
})

const mapDispatchToProps = (dispatch) => ({
  onChange(name, value) {
    console.log(name, value)

    // window.scrollTo({
    //     top: document.getElementById('results').getBoundingClientRect().top + window.pageYOffset - 100,
    //     behavior: "smooth"
    // })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)
