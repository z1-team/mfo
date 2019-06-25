import { h, Component } from 'preact'

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

	render({details, main, theme}, {isOpen}) {
		return (
			<footer class={isOpen ? style.active : ''}>
				<CardDetails details={details} theme={theme} />
				<ul>
					<li class={`theme-${theme}-text`}>{main.firstLoan && main.firstLoan}</li>
					<li><button class={`theme-${theme}-hover`} onClick={this.handleClick}><span>Подробнее</span> <i class="if fa-arrow-down"></i></button></li>
				</ul>
			</footer>
		)
	}
}

export default CardInfo
