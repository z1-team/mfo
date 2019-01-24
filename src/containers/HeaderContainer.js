import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import Header from '../components/header'
import { getPlace, showBot } from '../selectors/session'

const mapStateToProps = (state) => ({
  showBot: showBot(state),
  place: getPlace(state)
})

export default connect(mapStateToProps)(Header)
