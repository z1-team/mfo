import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import CardDetails from './details'

import style from './style.scss'

class CardInfo extends Component {
  state = {
    isOpen: false,
    height: 33
  }

  saveDetails = ref => this.details = ref

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = event => {
    const {isOpen, height} = this.state
    const {clientHeight} = this.details.base

    if (height !== clientHeight + 33 && isOpen) {
      this.setState({height: clientHeight + 33})
    }
  }

	handleClick = () => {
		const {onOpen} = this.props
    const {isOpen} = this.state
    const {clientHeight} = this.details.base
		if (typeof onOpen === 'function' && !isOpen) {
			onOpen()
		}
    const height = !isOpen
      ? this.details.base.clientHeight + 33
      : 33
		this.setState(prev => ({
      isOpen: !prev.isOpen,
      height
    }))
	}

	render({details}, {isOpen, height}) {
		return (
			<footer class={isOpen ? style.active : ''} style={{height: `${height}px`}}>
				<CardDetails details={details} ref={this.saveDetails} />
				<ul>
					<li><button onClick={this.handleClick}><Icon icon="arrow-down" /> <span>Подробнее</span></button></li>
				</ul>
			</footer>
		)
	}
}

export default CardInfo
