import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.scss'

class UsefullInfo extends Component {
	render() {
		return (
			<div class="wr-usefull-info">
				<div class="container">
					<div class={style.usefullInfo}>
						<div class={style.links}>
							<ul>
								<li>
									<Link activeClassName="active" href="/about">Подробнее о проекте</Link>
								</li>
								<li>
									<Link activeClassName="active" href="/confidentiality">Конфиденциальность</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UsefullInfo
