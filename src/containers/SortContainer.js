import { h, Component } from 'preact'
import Sorting from '../components/sorting'
import { connect } from 'preact-redux'

const mapStateToProps = (state) => ({
  sortInfo: state.sorting
})

const mapDispatchToProps = (dispatch) => ({
  onClick(event) {
    console.log(event.target.getAttribute('data-id'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorting)
