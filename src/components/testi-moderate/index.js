import { h, Component } from 'preact'

import style from './style.scss'

class TestiModerate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEdit: false,
      text: props.text
    }
  }

  handleEdit = () => {
    this.setState({isEdit: true})
  }

  handleBlur = () => {
    this.setState({isEdit: false})
  }

  handleChange = (event) => {
    const value = event.target.value

    this.setState({text: value})
  }

  handleDelete = (event) => {
    const {item, onDelete} = this.props
    event.preventDefault()
    if (typeof onDelete === 'function') {
      onDelete(item.id)
    }
  }

  handlePublic = (event) => {
    const {item, onPublic} = this.props
    event.preventDefault()
    if (typeof onPublic === 'function') {
      onPublic({...item, text: this.state.text})
    }
  }

  render({rating, user}, {isEdit, text}) {
    return (
      <div class={style.testi}>
        <div>
          <i class="fas fa-quote-left"></i>
          {isEdit ? <textarea value={text} tabIndex="1" autoFocus onBlur={this.handleBlur} onChange={this.handleChange}></textarea> : <p onClick={this.handleEdit}>{text}</p>}
          <i class="fas fa-quote-right"></i>
        </div>
        <footer>
          <p>{user}</p>
          <ul class={`rate-${rating}`}>
            <li><i class="fas fa-star"></i></li>
            <li><i class="fas fa-star"></i></li>
            <li><i class="fas fa-star"></i></li>
            <li><i class="fas fa-star"></i></li>
            <li><i class="fas fa-star"></i></li>
          </ul>
        </footer>
        <div class={style.actions}>
          <button onClick={this.handleDelete}>Удалить</button>
          <button onClick={this.handlePublic}>Опубликовать</button>
        </div>
      </div>
    )
  }
}

export default TestiModerate
