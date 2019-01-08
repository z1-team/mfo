import { h } from 'preact'
import FilterContainer from '../../containers/FilterContainer'
import SortContainer from '../../containers/SortContainer'
import ResultContainer from '../../containers/ResultContainer'
import style from './style.scss'

const Main = ({partners}) => (
	<div class="wr-main">
		<div class="container">
			<div class="main">
				<FilterContainer partners={partners} />
				<div class="results" id="results">
					<h2>Рейтинг {/*this.getTitle()*/} <em>Рунета 2018 года</em></h2>
					<SortContainer />
					<ResultContainer partners={partners} />
				</div>
			</div>
		</div>
	</div>
)

export default Main
