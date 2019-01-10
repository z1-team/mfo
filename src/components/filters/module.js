import { h, Component } from 'preact'

import style from './style.scss'

class SearchModule extends Component {
	handleClick = () => {
		const {name, onChange} = this.props

		if(typeof onChange === 'function') {
			onChange(name, null)
		}
	}

	render({title, children}) {
		return (
			<div class={style.searchModule}>
				<h4>{title} <button onClick={this.handleClick}><i class="fas fa-window-close"></i></button></h4>
				{children}
			</div>
		)
	}
}

export default SearchModule
