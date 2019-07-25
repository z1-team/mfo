import { h, Component } from 'preact'
import Icon from 'common/components/Icon'

import style from './style.scss'

import Button from 'common/components/Button'

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

  handleDelete = () => {
    const {item, onDelete} = this.props
    if (typeof onDelete === 'function') {
      onDelete(item.id)
    }
  }

  handlePublic = () => {
    const {item, onPublic} = this.props
    if (typeof onPublic === 'function') {
      onPublic({...item, text: this.state.text, status: 'published'})
    }
  }

  render({rating, user, title, item}, {isEdit, text}) {
    return (
      <div class={style.testi}>
        <header>
          <h3>Отзыв партнера &laquo;<span>{title}</span>&raquo;</h3>
        </header>
        <div>
          <Icon icon="quote-left" />
          {isEdit ? <textarea value={text} tabIndex="1" autoFocus onBlur={this.handleBlur} onChange={this.handleChange}></textarea> : <p onClick={this.handleEdit}>{text}</p>}
          <Icon icon="quote-right" />
        </div>
        <footer>
          <p>{user}</p>
          <ul class={`rate-${rating}`}>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
            <li><Icon icon="star" /></li>
          </ul>
        </footer>
        <div class={style.actions}>
          <Button id="delete" onClick={this.handleDelete}>Удалить</Button>
          <Button id="public" onClick={this.handlePublic}>Опубликовать</Button>
        </div>
      </div>
    )
  }
}

export default TestiModerate
