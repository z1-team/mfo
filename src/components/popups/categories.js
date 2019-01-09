import { h, Component } from 'preact'

class Categories extends Component {
	handleClick = ({target}) => {
		const { onChange } = this.props
		const dataID = target.getAttribute('data-id')

		onChange(dataID)
	}

	render({categories}) {
		return (
			<div class="categories">
				<ul>
					{categories.map((category) => (
						<li key={category.index}>
							<button onClick={this.handleClick} data-id={category.dataID}>{category.text}</button>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Categories
