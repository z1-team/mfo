import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.scss'

const Header = ({city}) => (
	<div class={style.wrHeader}>
		<div class="container">
			<div class={style.header}>
				<div class={style.contacts}>
					<p><i class="fas fa-map-marker-alt"></i>{city}</p>
				</div>
				<ul>
					<li><Link name="mfo" activeClassName={style.active} href="/">Микрозаймы</Link></li>
					<li><Link name="cards" activeClassName={style.active} href="/cards">Кредитные карты</Link></li>
				</ul>
			</div>
		</div>
	</div>
)

export default Header
