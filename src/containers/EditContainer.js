import { h, Component } from 'preact'
import { connect } from 'preact-redux'

import EditPopup from '../components/popups/edit'
import { getSelectedPartner } from '../selectors/partners'
import { closePopup } from '../actions/popup'
import { updatePartner, deletePartner } from '../actions/partners'

const mapStateToProps = (state, {theme}) => ({
  partner: getSelectedPartner(state),
  theme
})

const mapDispatchToProps = (dispatch) => ({
  onClose() {
    dispatch(closePopup())
  },
  onSave(id, partner) {
    dispatch(updatePartner(id, partner))
  },
  onDelete(id) {
    dispatch(deletePartner(id))
  },
  onCancel() {
    dispatch(closePopup())
  }
})

const EditPopupContainer = ({partner, ...props}) => (
  <EditPopup
    key={partner ? partner.id : 'No'}
    partner={partner}
    {...props}
  />
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPopupContainer)
