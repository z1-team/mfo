import { h, Component } from 'preact'

import style from './style.scss'

const labelClass = (isChecked, isActual) => (
	isChecked ? style.checked : isActual ? '' : style.disabled
)

class CheckboxFilter extends Component {
	handleChange = ({target}) => {
		const index = parseInt(target.getAttribute('data-index'))
		const {value, name, onChange} = this.props

		if(typeof onChange === 'function') {
			onChange(name, value.map((v, i) => (i === index ? !v : v)))
		}
	}

	render({items, value, actual}) {
		return (
			<div class={style.checkbox}>
				{items.map((title, index) => (
					<label
						key={index}
						class={labelClass(value[index], actual !== null ? actual[index] > 0 : true)}
					>
						<input data-index={index} onChange={this.handleChange} type="checkbox"/>{title}
						<span>{actual ? actual[index] : ''}</span>
					</label>
				))}
			</div>
		)
	}
}

export default CheckboxFilter
