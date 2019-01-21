import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import style from './style.scss'

class Footer extends Component {
	handleClick = (event) => {
		event.preventDefault()

		const {isLoggedIn, onLogin} = this.props

		onLogin(isLoggedIn)
	}
	render({isLoggedIn, onLogin}) {
		return (
			<div class={style.wrFooter}>
				<div class="container">
					<div class={style.footer}>
						<span class={style.logo}><img src="/assets/img/logo-footer.png"/></span>
						<small>&copy; 2018 Moneyonline &mdash; все займы онлайн на карту или наличными в одном месте. 16+</small>
						<ul class={style.admin}>
							<li><button onClick={this.handleClick}>{isLoggedIn ? "Выйти" : "Войти"}</button></li>
							{isLoggedIn && <li><Link href="/moderate">Модерация отзывов</Link></li>}
							<li><Link activeClassName="active" href="/confidentiality">Политика конфиденциальности</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
