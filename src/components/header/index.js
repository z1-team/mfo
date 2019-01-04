import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.scss'

class Header extends Component {

	render({city}) {

		return (
			<div class="wr-header">
				<div class="container">
					<div class={style.header}>
						<div class={style.contacts}>
							<p><i class="fas fa-map-marker-alt"></i>{this.props.city}</p>
						</div>
            <ul>
              <li><Link name="mfo" activeClassName="active" href="/">Микрозаймы</Link></li>
              <li><Link name="cards" activeClassName="active" href="/cards">Кредитные карты</Link></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
