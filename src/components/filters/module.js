import { h, Component } from 'preact'

import style from './style.scss'

class SearchModule extends Component {
	handleClick = () => {
		const {name, onChange} = this.props

		if(typeof onChange === 'function') {
			onChange(name, null)
		}
	}

	render({title, children, isActive}) {
		return (
			<div class={style.filter}>
				<h4>{title} <button class={isActive ? style.active : ''} onClick={this.handleClick}><i class="fas fa-window-close"></i></button></h4>
				{children}
			</div>
		)
	}
}

export default SearchModule
