import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import style from './style.scss'

class Footer extends Component {

	render() {
		const isLoggedIn = false

		return (
      <div class={style.wrFooter}>
				<div class="container">
					<div class={style.footer}>
						<span class={style.logo}><img src="/assets/img/logo-footer.png"/></span>
						<small>&copy; 2018 Moneyonline. Информация, предоставленная на сайте, носит ознакомительный характер. Реальные предложения организаций могут отличаться.</small>
            <ul class={style.admin}>
              <li><button>{isLoggedIn ? "Выйти" : "Войти"}</button></li>
              {isLoggedIn && <li><Link href="/moderate">Модерация отзывов</Link></li>}
            </ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
