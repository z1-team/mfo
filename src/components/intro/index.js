import { h, Component } from 'preact'
import style from './style.scss'

class Intro extends Component {
	getBackground() {
		const {url} = this.props

		switch(url) {
			case "/":
				return style.wrIntro
			case "/cards":
				return [style.wrIntro, style.cards].join(' ')
			default:
				return style.wrIntro
		}
	}

	getTitle() {
    const {url} = this.props

		switch(url) {
			case "/":
				return (
					<section>
						<h1>Ищете <strong>где занять денег?</strong></h1>
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
								<img src="/assets/img/logo.png" />
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
