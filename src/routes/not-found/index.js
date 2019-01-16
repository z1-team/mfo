import { h, Component } from 'preact'

import style from './style.scss'

const NotFound = () => (
	<div class={style.wrNotFound}>
		<div class="container">
			<div class={style.notFound}>
				<h2>404</h2>
				<h3>Страница не найдена.</h3>
			</div>
		</div>
	</div>
)

export default NotFound
