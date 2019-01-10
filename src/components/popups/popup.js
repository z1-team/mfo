import { h } from 'preact'

import style from './style.scss'

const Popup = ({isOpened, children, name}) => (
  <div class={`popup ${name}` + isOpened ? ' active' : ''}>
    {children}
  </div>
)

export default Popup
