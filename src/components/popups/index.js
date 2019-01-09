import { h } from 'preact'

const Popups = ({isOpened, children, onClose}) => (
  <div class={isOpened ? "popups active" : "popups"} onClick={onClose}>
    {children}
  </div>
)

export default Popups
