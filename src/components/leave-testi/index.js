import { h, Component } from 'preact'

import LeaveRating from '../leave-rating'
import Button from '../utility/Button'

import style from './style.scss'

const initialState = {
  name: '',
  email: '',
  text: '',
  rating: 0,
  isEditing: {
    name: false,
    email: false,
    text: false,
    rating: false
  }
}

class Testi extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...initialState,
      cardID: props.id
    }
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    this.setState(prev => ({
      [name]: value,
      isEditing: {
        ...prev.isEditing,
        [name]: true
      }
    }))
  }

  handleRating = (value) => {
    this.setState({rating: value})
  }

  handleSubmit = (param) => {
    const {name, email, text, rating} = this.state
    const {id, onSubmit} = this.props

    if(name && email && text && rating !== 0) {
      if (typeof onSubmit === 'function') {
        onSubmit({partner: id, name, email, text, rating})
      }

      this.setState(initialState)
    } else {
      this.setState(prev => ({
        isEditing: {
          name: !prev.name,
          email: !prev.email,
          text: !prev.text,
          rating: !prev.rating
        }
      }))
    }
  }

  render({onSubmit}, {name, email, text, rating, isEditing}) {
    return(
      <div class={style.leaveTesti}>
        <h2>Оставьте свой отзыв</h2>
        <form action="#" onSubmit={this.handleSubmit}>
          <section>
            <div class={style.formInput}>
              <label>Ваше имя</label>
              <input type="text" name="name" value={name} onChange={this.handleChange}/>
              {isEditing.name && !name && <p>Пожалуйста, заполните поле.</p>}
            </div>
            <div class={style.formInput}>
              <label>Ваш e-mail</label>
              <input type="email" name="email" value={email} onChange={this.handleChange}/>
              {isEditing.email && !email && <p>Пожалуйста, заполните поле.</p>}
            </div>
            <div class={style.formTextarea}>
              <label>Ваш отзыв</label>
              <textarea name="text" value={text} onChange={this.handleChange}></textarea>
              {isEditing.text && !text && <p>Пожалуйста, заполните поле.</p>}
            </div>
            <div class={style.formInput}>
              <label>Ваша оценка</label>
              <LeaveRating onChange={this.handleRating} rating={rating} />
              {isEditing.rating && rating === 0 && <p>Пожалуйста, поставьте свою оценку.</p>}
            </div>
          </section>
          <footer>
            <Button id="leave-testi" onClick={this.handleSubmit}>Отправить отзыв</Button>
          </footer>
        </form>
      </div>
    )
  }
}

export default Testi
