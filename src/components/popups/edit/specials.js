import { h, Component } from 'preact'

class EditPopupSpecials extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value ? props.value : null
    }
  }

  handleChange = ({target}) => {
		const {onChange, value} = this.props
    const current = value ? value : null
    const newValue = target.name !== value ? target.name : null
    if(typeof onChange === 'function') {
      onChange("main", "special_label", newValue)
    }

    this.setState({value: newValue})
	}

  render({value}) {
    return (
      <div class="specials">
        <h3>Спецпредложения</h3>
        <div class="checkbox-module">
          <label class={value === "big_summ" ? "active" : ""}>
            <input name="big_summ" onChange={this.handleChange} type="checkbox"/>
            На Большую Сумму
          </label>
          <label class={value === "long_term" ? "active" : ""}>
            <input name="long_term" onChange={this.handleChange} type="checkbox"/>
            На Долгий Период
          </label>
          <label class={value === "quick_solution" ? "active" : ""}>
            <input name="quick_solution" onChange={this.handleChange} type="checkbox"/>
            Быстрое Решение
          </label>
          <label class={value === "recommend" ? "active" : ""}>
            <input name="recommend" onChange={this.handleChange} type="checkbox"/>
            Рекомендуют
          </label>
        </div>
      </div>
    )
  }
}

export default EditPopupSpecials
