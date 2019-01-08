import { h, Component } from 'preact'

const labelClass = (isChecked, isActual) => (
	isChecked ? 'active' : isActual ? '' : 'disabled'
)

class RadioFilter extends Component {
	handleChange = ({target}) => {
		const index = parseInt(target.getAttribute('data-index'))
		const {value, name, onChange} = this.props

		if(typeof onChange === 'function') {
			onChange(name, value.map((v, i) => (
				i === index ? !v : false
			)))
		}
	}

	render({items, value, name, actual}) {
		return (
			<div className="checkbox-module">
				{items.map((title, index) => (
					<label key={index} className={labelClass(value[index], actual !== null ? actual[index] > 0 : true)}>
						<input data-index={index} onChange={this.handleChange} type="checkbox" name={name}/>{title}
						<span>{actual ? actual[index] : ''}</span>
					</label>
				))}
			</div>
		)
	}
}

export default RadioFilter
