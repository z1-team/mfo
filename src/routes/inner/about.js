import { h } from 'preact'

import style from './style.scss'

const AboutProject = () => (
	<div class={style.wrInnerText}>
		<div class="container">
			<div class={style.innerText}>
				<h2>О проекте</h2>
				<p>Наш сервис предоставляет актуальную информацию в области кредитования.</p>
				<p>Вы можете ознакомиться с предложениями популярных Кредитных карт, потребительских кредитов и микрозаймов.</p>
				<p>Исходя из указанных параметров, вы с легкостью можете узнать процентную ставку, сроки рассмотрения заявки, требуемый возраст и способы получения средств, а также минимальные и максимальные суммы займа, и другие преимущества того или иного оператора.</p>
			</div>
		</div>
	</div>
)

export default AboutProject
