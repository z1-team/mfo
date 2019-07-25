import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import FooterCommon from 'common/components/Footer'

import style from './style.scss'

class Footer extends Component {
  handleClick = event => {
    event.preventDefault()
    const {isLoggedIn, onLogin} = this.props

    if (typeof onLogin === 'function') {
      onLogin(isLoggedIn)
    }
  }
  render({isLoggedIn, theme}) {
    return (
      <FooterCommon >
        <span class={style.logo}><img src={`/assets/img/logo-footer-${theme}.png`}/></span>
        <small>&copy; 2019 Moneyonline &mdash; все займы онлайн на карту или наличными в одном месте. 16+</small>
        <ul class={style.admin}>
          <li><button onClick={this.handleClick}>{isLoggedIn ? "Выйти" : "Войти"}</button></li>
          {isLoggedIn && <li><Link href="/moderate">Модерация отзывов</Link></li>}
          <li><Link activeClassName="active" href="/confidentiality">Политика конфиденциальности</Link></li>
        </ul>
      </FooterCommon>
    )
  }
}

export default Footer
