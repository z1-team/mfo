import { h, Component } from 'preact'

class EditPopupFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: props.values
    }
  }

  handleChange = (event) => {
    const index = event.target.getAttribute("data-index")
    const {onChange, name} = this.props

    this.setState((prevState) => {
      const values = prevState.values.slice()
      values[index] = !prevState.values[index]

      if(typeof onChange === "function") {
        onChange("filters", name, values)
      }

      return {values}
    })
  }

  render({title, names}, {values}) {
    return (
      <div class="popup-filter">
        <h3>{title}</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>
    					<label class={values[index] ? 'active' : ''}><input data-index={index} onChange={this.handleChange} type="checkbox"/>{name}</label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default EditPopupFilter
