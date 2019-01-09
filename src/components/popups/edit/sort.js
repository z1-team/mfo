import { h, Component } from 'preact'

import { sortInputs, defaultSort } from './const'

class EditPopupSort extends Component {
  constructor(props) {
    super(props)

    const { type } = props

    this.state = {
      ...(defaultSort[type] || defaultSort.mfo),
      ...(props.sortInfo || {})
     }
  }

  defaultSort(id) {
    const { type } = this.props

    return sortInputs[type][id] || sortInputs.mfo[id]
  }

  handleChange = (event) => {
    const sortBy = event.target.name
    const value = event.target.value
    const { onChange } = this.props

    this.setState({[sortBy]: value})

    if(typeof onChange === 'function'){
      onChange("sortBy", sortBy, parseFloat(value))
    }
  }

  render(props, sortInfo) {
    return(
      <div>
        <ul>
          {Object.getOwnPropertyNames(sortInfo).filter(filter => filter !== "rating" && filter !== "testimonials_count").map((id) => (
            <li key={id}>
              <label>{this.defaultSort(id)}:
                <input type="text" name={id} onChange={this.handleChange} value={sortInfo[id]} />
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default EditPopupSort
