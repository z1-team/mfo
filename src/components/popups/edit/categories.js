import { h, Component } from 'preact'

import { categoriesNames } from './const'

class EditPopupCategories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: props.categories
    }
  }

  handleChange = (event) => {
    const {type, onChange} = this.props
    const index = event.target.getAttribute('data-index')
    const name = `category_${type}`
    this.setState((prev) => {
      const result = prev.values.slice()
      result[index] = !prev.values[index]

      if(typeof onChange === "function") {
        onChange("filters", name, result)
      }

      return {
        values: result
      }
    })
  }

  render({type}, {values}) {
    return (
      <ul>
        {categoriesNames[type].map((title, index) => (
          <li key={index}>
            <label class={values[index] ? 'active' : ''}>
              <input type="checkbox" data-index={index} onChange={this.handleChange} />
              {title}
            </label>
          </li>
        ))}
      </ul>
    )
  }
}

export default EditPopupCategories
