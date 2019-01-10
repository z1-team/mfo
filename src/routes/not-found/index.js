import { h, Component } from 'preact'

import style from './style.scss'

const NotFound = () => (
	<div className={style.wrNotFound}>
		<div className="container">
			<div className={style.notFound}>
				<h2>404</h2>
				<h3>Страница не найдена.</h3>
			</div>
		</div>
	</div>
)

export default NotFound
