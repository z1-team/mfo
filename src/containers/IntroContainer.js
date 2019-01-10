import { h, Component } from 'preact'
import Intro from '../components/intro'
import { connect } from 'preact-redux'
import { getABTests } from '../selectors/session'

const mapStateToProps = (state, {url}) => ({
  url,
  abTests: getABTests(state)
})

const IntroContainer = ({url}) => <Intro url={url} abTests={{}} />

export default IntroContainer
