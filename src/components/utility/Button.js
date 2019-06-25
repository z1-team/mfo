import { h, Component } from 'preact'
import {ThemeContext} from '../app'
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
      <ThemeContext.Consumer>
        {({theme}) => (<button class={`theme-${theme}-button ${style[type]} ${mixin ? mixin : ''}`} onClick={this.handleClick}>
          {children}
        </button>)}
      </ThemeContext.Consumer>
    )
  }
}

export default Button
