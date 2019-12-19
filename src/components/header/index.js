import { h } from 'preact'
import { Link } from 'preact-router/match'
import HeaderCommon from 'common/components/Header'
import Icon from 'common/components/Icon'

import style from './style.scss'

const Header = ({place, showBot}) => <HeaderCommon place={place} showBot={showBot}>
	<ul class={style.links}>
		<li><Link name="mfo" activeClassName={style.active} href="/"><Icon class={style.icon} icon="cash" /> Микрозаймы </Link></li>
		<li><Link name="cards" activeClassName={style.active} href="/cards"><Icon class={style.icon} icon="card" /> Кредитные карты</Link></li>
	</ul>
	<div class={style.contacts}>
		<p class={style.contactsText}><Icon icon="marker" />{place}</p>
	</div>
</HeaderCommon>

export default Header
