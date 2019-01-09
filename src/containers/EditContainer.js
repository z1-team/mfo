import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import EditPopup from '../components/popups/edit'

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

export default connect(mapDispatchToProps)(EditPopup)
