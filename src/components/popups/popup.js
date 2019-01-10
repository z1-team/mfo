import { h, Component } from 'preact'

class Popup extends Component {
  handleClick(event) {
    event.stopPropagation()
  }

  render({isOpened, children, name}) {
    return (
      <div class={`popup ${name}` + (isOpened ? ' active' : '')} onClick={this.handleClick}>
        {children}
      </div>
    )
  }
}

export default Popup
