import { h } from 'preact'
import FilterContainer from '../../containers/FilterContainer'
import SortContainer from '../../containers/SortContainer'
import ResultContainer from '../../containers/ResultContainer'
import style from './style.scss'

const getTitle = (partner) => {
	switch(partner) {
		case 'mfo':
			return 'займов'
		case 'cards':
			return 'кредитных карт'
		default:
			return 'займов'
	}
}

const Main = ({partners}) => (
	<div class={style.wrMain}>
		<div class="container">
			<div class={style.main}>
				<div class={style.results} id="results">
					<h2>Рейтинг {getTitle(partners)} <em>Рунета 2019 года</em></h2>
					<SortContainer partners={partners} />
					<ResultContainer partners={partners} />
				</div>
				<FilterContainer partners={partners} />
			</div>
		</div>
	</div>
)

export default Main
