import { h, Component } from 'preact'
import { ThemeContext } from '../app'

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
      <ThemeContext.Consumer>
        {({theme}) => (
          <div class={style.testi}>
            {isLoggedIn && <a href="#" class={style.delete} onClick={this.handleDelete}><i class={`theme-${theme}-text if fa-times`}></i></a>}
            <div>
              <i class="if fa-quote-left"></i>
              <p>{text}</p>
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
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Testi
