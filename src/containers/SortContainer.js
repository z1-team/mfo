import { h, Component } from 'preact'
import Sorting from '../components/sorting'
import { connect } from 'preact-redux'
import { changeSorting } from '../actions/sorting'

const mapStateToProps = (state) => ({
  sortInfo: state.sorting
})

const mapDispatchToProps = (dispatch) => ({
  onClick(event) {
    const sortBy = event.target.getAttribute('data-id')
    dispatch(changeSorting(sortBy))
    event.preventDefault()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
