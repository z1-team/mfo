import { h, Component } from 'preact'
import style from './styles/Button.scss'

class Button extends Component {
  handleClick = (event) => {
    event.preventDefault()

    const {id, onClick} = this.props

    if (typeof onClick === 'function') {
      onClick(id)
    }
  }

  render({type = "normal", class: mixin, children}) {
    return (
      <button class={`${style[type]} ${mixin ? mixin : ''}`} onClick={this.handleClick}>
        {children}
      </button>
    )
  }
}

export default Button
