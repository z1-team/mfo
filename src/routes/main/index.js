import { h } from 'preact'
import FilterContainer from '../../containers/FilterContainer'
import SortContainer from '../../containers/SortContainer'
import ResultContainer from '../../containers/ResultContainer'
import style from './style.scss'

const getTitle = (partner) => {
	switch(partner) {
		case 'mfo':
			return 'займ'
		case 'cards':
			return 'карту'
		default:
			return 'займ'
	}
}

const Main = ({partners}) => (
	<div class={style.wrMain}>
		<div class="container">
			<div class={style.main}>
				<div class={style.results} id="results">
					<h2>
						{/* Рейтинг {getTitle(partners)} <em>Рунета 2020 года</em> */}
						<em>При отправке трех и более заявок</em> шанс получить {getTitle(partners)} 99%<em></em></h2>
					<SortContainer partners={partners} />
					<ResultContainer partners={partners} />
				</div>
				<FilterContainer partners={partners} />
			</div>
		</div>
	</div>
)

export default Main
