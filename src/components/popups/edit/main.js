import { h, Component } from 'preact'

class EditPopupMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPublished: true,
      ...props.main
    }
  }

  handleChange = (event) => {
    const name = event.target.getAttribute('data-name')
    const value = event.target.value
    const {onChange} = this.props

    this.setState({ [name]: value })

    if(typeof onChange === "function") {
      onChange("main", name, value)
    }
  }

  handleCheckbox = (event) => {
    const {main, onChange} = this.props

    this.setState(prev => {
      const value = !prev.isPublished

      if(typeof onChange === "function") {
        onChange("main", "isPublished", value)
      }
      return {isPublished: value}
    })
  }

  render({names}, main) {
    return (
      <div>
        {Object.getOwnPropertyNames(main).filter(el => el !== 'logo' && el !== 'special_label' && el !== 'isPublished').map((label, index) =>(
          <label key={index}>{names[label]}: <input type="text" data-name={label} value={main[label]} onChange={this.handleChange}/></label>
        ))}
        <div class="checkbox-module">
          <label class={main.isPublished ? "active" : ""}>
            <input name="isPublished" onChange={this.handleCheckbox} type="checkbox"/>
            Опубликовать
          </label>
        </div>
      </div>
    )
  }
}

export default EditPopupMain
