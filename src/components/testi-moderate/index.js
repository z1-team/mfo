import { h, Component } from 'preact'
import { ThemeContext } from '../app'

import style from './style.scss'

import Button from '../utility/Button'

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
    console.log(item)
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <div class={style.testi}>
            <header>
              <h3>Отзыв партнера &laquo;<span class={`theme-${theme}-text`}>{title}</span>&raquo;</h3>
            </header>
            <div>
              <i class="if fa-quote-left"></i>
              {isEdit ? <textarea value={text} tabIndex="1" autoFocus onBlur={this.handleBlur} onChange={this.handleChange}></textarea> : <p onClick={this.handleEdit}>{text}</p>}
              <i class="if fa-quote-right"></i>
            </div>
            <footer>
              <p>{user}</p>
              <ul class={`rate-${rating}`}>
                <li><i class="if fa-star"></i></li>
                <li><i class="if fa-star"></i></li>
                <li><i class="if fa-star"></i></li>
                <li><i class="if fa-star"></i></li>
                <li><i class="if fa-star"></i></li>
              </ul>
            </footer>
            <div class={style.actions}>
              <Button id="delete" onClick={this.handleDelete}>Удалить</Button>
              <Button id="public" onClick={this.handlePublic}>Опубликовать</Button>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default TestiModerate
