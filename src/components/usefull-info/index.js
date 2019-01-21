import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.scss'

const UsefullInfo = () => (
	<div class={style.wrUsefullInfo}>
		<div class="container">
			<div class={style.usefullInfo}>
				<div class={style.links}>
					<ul>
						<li>
							<Link activeClassName="active" href="/about">Подробнее о проекте</Link>
						</li>
						<li>
							<Link activeClassName="active" href="/confidentiality">Политика конфиденциальности</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
)

export default UsefullInfo
