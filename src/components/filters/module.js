import { h, Component } from 'preact'
import { ThemeContext } from '../app'

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
			<ThemeContext.Consumer>
				{({theme}) => (
					<div class={style.filter}>
						<h4>
							{title}
							<button
								class={isActive ? `theme-${theme}-text ${style.active}` : ''}
								onClick={this.handleClick}
							>
								<span class={`theme-${theme}-tooltip`}>Сбросить фильтр</span>
								<i class="if fa-close"></i>
							</button>
						</h4>
						{children}
					</div>
				)}
			</ThemeContext.Consumer>
		)
	}
}

export default SearchModule
