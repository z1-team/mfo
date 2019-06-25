import { h } from 'preact'
import { Link } from 'preact-router/match'
import { ThemeContext } from '../app'

import style from './style.scss'

const Header = ({place, showBot}) => (
	<ThemeContext.Consumer>
		{({theme}) => (
			<div class={`theme-${theme}-background ${style.wrHeader}`}>
				<div class="container">
					<div class={style.header}>
						<div class={style.contacts}>
							<p class={style.contactsText}><i class="if fa-marker"></i>{place}</p>
						</div>
						{showBot ? <Link activeClassName={style.active} href="/">Автоподбор займов в вашем городе</Link>
							: <ul>
							<li><Link name="mfo" activeClassName={style.active} href="/">Микрозаймы</Link></li>
							<li><Link name="cards" activeClassName={style.active} href="/cards">Кредитные карты</Link></li>
						</ul>}
					</div>
				</div>
			</div>
		)}
	</ThemeContext.Consumer>
)

export default Header
