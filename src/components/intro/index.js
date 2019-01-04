import { h, Component } from 'preact'
import style from './style.scss'

class Intro extends Component {

	render() {
		return (
      <div class="wr-intro">
        <div class="container">
          <div class={style.intro}>
						<header>
							<figure>
								<img src="/img/logo.png" />
							</figure>
						</header>
					</div>
				</div>
			</div>
		)
	}
}

export default Intro
