import { h } from 'preact'

import style from './styles/tab.scss'

const Tab = ({name, isOpen, children}) => (
  <div class={isOpen ? `${style[name]} ${style.active}` : `${style[name]}`}>
    {children}
  </div>
)

export default Tab
