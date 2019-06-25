import { h, Component } from 'preact'

import style from './style.scss'

class ToTop extends Component{
  state = {
    isVisible: false
  }

  componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const {isVisible} = this.state

		this.setState(prev => {
      const isVisible = window.pageYOffset > 400
      return prev.isVisible !== isVisible ? {isVisible} : null
    })
	}

  handleToTop = (event) => {
    event.preventDefault()
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  render({theme}, {isVisible}) {
    return (
      <a href="#" className={`theme-${theme}-text ${style.toTop} ${isVisible ? style.active : ''}`} onClick={this.handleToTop}>
        <i className="if fa-arrow-up-alt"></i>
      </a>
    )
  }
}

export default ToTop
