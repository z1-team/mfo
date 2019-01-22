import { h, Component } from 'preact'

import style from './style.scss'

class LeaveRating extends Component {
  state = {
    hover: 0,
    isHover: false
  }

  handleClick = (event) => {
    const value = parseInt(event.target.getAttribute('data-value'))
    const { onChange } = this.props

    if(typeof onChange === 'function') {
      onChange(value)
    }
  }

  handleMove = (event) => {
    const value = parseInt(event.target.getAttribute('data-value'))

    this.setState({hover: value, isHover: true})
  }

  handleLeave = () => {
    this.setState({isHover: false})
  }

  selectValue() {
    const { hover, isHover } = this.state
    const { rating } = this.props

    return isHover ? hover : rating
  }

  render() {
    const value = this.selectValue()
    return (
      <ul class={`${style.leaveRate} rate-${value}`} onMouseLeave={this.handleLeave}>
        <li class="if fa-star" data-value="1" onClick={this.handleClick} onMouseEnter={this.handleMove}></li>
        <li class="if fa-star" data-value="2" onClick={this.handleClick} onMouseEnter={this.handleMove}></li>
        <li class="if fa-star" data-value="3" onClick={this.handleClick} onMouseEnter={this.handleMove}></li>
        <li class="if fa-star" data-value="4" onClick={this.handleClick} onMouseEnter={this.handleMove}></li>
        <li class="if fa-star" data-value="5" onClick={this.handleClick} onMouseEnter={this.handleMove}></li>
      </ul>
    )
  }
}

export default LeaveRating
