import { h } from 'preact'
import { Link } from 'preact-router/match'
import HeaderCommon from 'common/components/Header'

import style from './style.scss'

const Header = ({place, showBot}) => <HeaderCommon place={place} showBot={showBot}>
	<div class={style.contacts}>
		<p class={style.contactsText}><Icon icon="marker" />{place}</p>
	</div>
	<ul class={style.links}>
		<li><Link name="mfo" activeClassName={style.active} href="/">Микрозаймы</Link></li>
		<li><Link name="cards" activeClassName={style.active} href="/cards">Кредитные карты</Link></li>
	</ul>
</HeaderCommon>

export default Header
