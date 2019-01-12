import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import EditPopup from '../components/popups/edit'
import { getSelectedPartner } from '../selectors/partners'

const mapStateToProps = (state, {url}) => ({
  partner: getSelectedPartner(state),
  url
})

const mapDispatchToProps = () => ({
  onClose() {
    console.log('closed')
  },
  onSave(id, partner) {
    console.log(id, partner)
  },
  onDelete(id) {
    console.log(id)
  },
  onCancel() {
    console.log('canceled')
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPopup)
