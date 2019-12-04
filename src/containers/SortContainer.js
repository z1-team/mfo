import { h, Component } from 'preact'
import Sorting from '../components/sorting'
import { connect } from 'preact-redux'
import { changeSorting } from '../actions/sorting'
import { sortButtons } from './helpers/const'

const mapStateToProps = (state, {partners}) => ({
  sortInfo: state.sorting,
  sortButtons: sortButtons[partners]
})

const mapDispatchToProps = (dispatch) => ({
  onClick(sortBy) {
    dispatch(changeSorting(sortBy))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
