import { h } from 'preact'

import style from './styles/popups.scss'

const Popups = ({isOpened, children, onClose}) => (
  <div class={isOpened ? `${style.active}` : `${style.normal}`} onClick={onClose}>
    {children}
  </div>
)

export default Popups
