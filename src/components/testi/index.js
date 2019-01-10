import { h, Component } from 'preact'

import style from './style'

class Testi extends Component {

  handleDelete = (event) => {
    event.preventDefault()

    const { testiID, onDelete } = this.props

    if(typeof onDelete === 'function') {
      onDelete(testiID)
    }
  }

  render({text, user, rating, isLoggedIn}) {
    return(
      <div class={style.testi}>
        {isLoggedIn && <a href="#" class={style.delete} onClick={this.handleDelete}><i class="fas fa-times"></i></a>}
        <div>
          <i class="fas fa-quote-left"></i>
          <p>{text}</p>
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
      </div>
    )
  }
}

export default Testi
