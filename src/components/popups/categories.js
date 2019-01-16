import { h, Component } from 'preact'

import style from './styles/categories.scss'

class Category extends Component {
	handleClick = (event) => {
		event.preventDefault()
		const {category, onClick} = this.props
		onClick(category.dataID)
	}

	render({isActive, category}) {
		return (
			<li class={isActive ? style.active : ''}>
				<button onClick={this.handleClick}>
					{category.text}
				</button>
			</li>
		)
	}
}

class Categories extends Component {
	handleClick = (id) => {
		const {value, onChange} = this.props
		onChange(value, id)
	}

	render({value, categories}) {
		return (
			<div class={style.categories}>
				<ul>
					{categories.map((category, index) => (
						<Category
							key={category.index}
							category={category}
							isActive={value[index-1]}
							onClick={this.handleClick}
						/>
					))}
				</ul>
			</div>
		)
	}
}

export default Categories
