import { h } from 'preact'

import style from './style.scss'

const Popups = ({isOpened, children, onClose}) => (
  <div class={isOpened ? "popups active" : "popups"} onClick={onClose}>
    {children}
  </div>
)

export default Popups
