import { h, Component } from 'preact'

import style from './style.scss'

const labelClass = (isChecked, isActual) => (
	isChecked ? style.checked : isActual ? '' : style.disabled
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
			<div class={style.checkbox}>
				{items.map((title, index) => (
					<label key={index} class={labelClass(value[index], actual !== null ? actual[index] > 0 : true)}>
						<input data-index={index} onChange={this.handleChange} type="checkbox" name={name}/>{title}
						<span>{actual ? actual[index] : ''}</span>
					</label>
				))}
			</div>
		)
	}
}

export default RadioFilter
