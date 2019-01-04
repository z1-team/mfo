import { h, Component } from 'preact'
import style from './style.scss'

class Intro extends Component {
	getBackground() {
		const {url} = this.props

		switch(url) {
			case "/":
				return "wr-intro mfo"
			case "/cards":
				return "wr-intro cards"
			default:
				return "wr-intro"
		}
	}

	getTitle() {
    const {url} = this.props

		switch(url) {
			case "/":
				return (
					<section>
						<h1>Ищите <strong>где занять денег?</strong></h1>
						<h2>Мы отобрали лучшие предложения.</h2>
					</section>
				)
			case "/cards":
				return (
					<section>
						<h1>Выгодные <span><strong>Кредитные Карты</strong></span></h1>
						<h2>Лучшие Предложения Банков</h2>
					</section>
				)
			default:
				return false
		}
	}

	render({abTests, url}) {
		const styles = url === '/mfo' ? {
      backgroundImage: 'url(' + abTests.bannerPictures + ')'
    } : {}

		return (
      <div class={this.getBackground()} style={abTests.bannerPictures ? styles : {}}>
        <div class="container">
          <div class={style.intro}>
						<header>
							<figure>
								<img src="/img/logo.png" />
							</figure>
						</header>
						{this.getTitle()}
					</div>
				</div>
			</div>
		)
	}
}

export default Intro
