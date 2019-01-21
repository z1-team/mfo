import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Header from '../components/header'
import { getCity, showBot } from '../selectors/session'

const mapStateToProps = (state) => ({
  showBot: showBot(state),
  city: getCity(state)
})

export default connect(mapStateToProps)(Header)
