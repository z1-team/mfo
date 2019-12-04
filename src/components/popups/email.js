import { h } from 'preact'
import EmailCommon from 'common/components/PopupEmail'

import style from './styles/email.scss'

const Email = ({onSubmit, onClose}) => <EmailCommon onSubmit={onSubmit} onClose={onClose} />

export default Email
