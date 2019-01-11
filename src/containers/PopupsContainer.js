import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import Popups from '../components/popups'
import Popup from '../components/popups/popup'
import Testimonials from '../components/popups/testimonials'
import Subscribed from '../components/popups/subscribed'

import AuthContainer from './AuthContainer'
import CategoriesContainer from './CategoriesContainer'
import EditContainer from './EditContainer'
import EmailContainer from './EmailContainer'

import { closePopup } from '../actions/popup'

const items = i => Object.getOwnPropertyNames(i)

const isOpened = (popups, name = null) => (
  name === null ? items(popups).some(p => popups[p]) : popups[name]
)

const PopupsContainer = ({popups, url, onClose}) => (
  <Popups isOpened={isOpened(popups)} onClose={onClose}>
    <Popup name="login" isOpened={isOpened(popups, 'login')}>
      <AuthContainer />
    </Popup>
    <Popup name="categories" isOpened={isOpened(popups, 'categories')}>
      <CategoriesContainer url={url} />
    </Popup>
    <Popup name="edit" isOpened={isOpened(popups, 'edit')}>
      <EditContainer />
    </Popup>
    <Popup name="email" isOpened={isOpened(popups, 'email')}>
      <EmailContainer />
    </Popup>
    <Popup name="testimonial" isOpened={isOpened(popups, 'testimonial')}>
      <Testimonials onClose={onClose} />
    </Popup>
    <Popup name="subscribed" isOpened={isOpened(popups, 'subscribed')}>
      <Subscribed onClose={onClose} />
    </Popup>
  </Popups>
)

const mapStateToProps = (state, {url}) => ({
  popups: state.popups,
  url
})

const mapDispatchToProps = (dispatch) => ({
  onClose(event) {
    event.preventDefault()
    dispatch(closePopup())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupsContainer)
