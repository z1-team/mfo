import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Header from '../components/header'
import { getCity } from '../selectors/session'

const mapStateToProps = (state) => ({
  city: getCity(state)
})

export default connect(mapStateToProps)(Header)
