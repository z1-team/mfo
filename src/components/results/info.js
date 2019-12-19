import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import CardDetails from './details'

import style from './style.scss'

class CardInfo extends Component {
  state = {
    isOpen: false
  }

	handleClick = () => {
		const {onOpen} = this.props
		if (typeof onOpen === 'function' && !this.state.isOpen) {
			onOpen()
		}
		this.setState(prev => ({isOpen: !prev.isOpen}))
	}

	render({details}, {isOpen}) {
		return (
			<footer class={isOpen ? style.active : ''}>
				<CardDetails details={details} />
				<ul>
					<li><button onClick={this.handleClick}><span>Подробнее</span> <Icon icon="arrow-down" /></button></li>
				</ul>
			</footer>
		)
	}
}

export default CardInfo
