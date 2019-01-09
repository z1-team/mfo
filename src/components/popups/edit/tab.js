import { h } from 'preact'

const Tab = ({name, isOpen, children}) => (
  <div class={`card-${name}` + isOpen ? ' active' : ''}>
    {children}
  </div>
)
