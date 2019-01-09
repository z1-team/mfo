import { h } from 'preact'

const Popup = ({isOpened, children, name}) => (
  <div class={`popup ${name}` + isOpened ? ' active' : ''}>
    {children}
  </div>
)

export default Popup
