import { h, Component } from 'preact'

class LogoUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.logo
    }
  }

  handleChange = (event) => {
    const {onChange} = this.props
    var reader = new FileReader()

    reader.addEventListener("load", (event) => {
      this.setState({image: event.target.result})

      if(typeof onChange === "function") {
        onChange("main", "logo", event.target.result)
      }
    })
    reader.readAsDataURL(this.fileUpload.files[0])
  }

  render({image}) {
    return (
      <figure>
        <img src={image} />
        <figcaption>
          <label>
            <i class="if fa-upload"></i>
            <input ref={ref => this.fileUpload = ref} type="file" accept="image/x-png,image/jpeg" onChange={this.handleChange}/>
          </label>
        </figcaption>
      </figure>
    )
  }
}

export default LogoUploader
