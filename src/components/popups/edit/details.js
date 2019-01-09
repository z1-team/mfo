import { h, Component } from 'preact'

import { detailsNames } from './const'

class EditPopupDetails extends Component {
  constructor(props) {
    super(props)
    this.state = props.details
  }

  handleChange = ({target}) => {
    const detail = target.getAttribute('data-name')
    const value = target.value
    const {onChange} = this.props

    this.setState({ [detail]: value })

    if(typeof onChange === "function") {
      onChange("details", detail, value)
    }
  }

  render(props, details) {
    return (
      <ul>
        {Object.getOwnPropertyNames(details).map((detail, index) => (
          <li key={index}>
            <label>{detailsNames[detail]}: <input type="text" data-name={detail} value={details[detail]} onChange={this.handleChange} /></label>
          </li>
        ))}
      </ul>
    )
  }
}

export default EditPopupDetails
