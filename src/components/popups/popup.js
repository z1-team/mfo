import { h, Component } from 'preact'

import style from './styles/popup.scss'

class Popup extends Component {
  handleClick(event) {
    event.stopPropagation()
  }

  render({isOpened, children, name}) {
    return (
      <div class={isOpened ? `${style[name]} ${style.active}` : style[name]} onClick={this.handleClick}>
        {children}
      </div>
    )
  }
}

export default Popup
