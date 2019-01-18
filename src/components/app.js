import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Match from 'preact-router/match'
import { Provider } from 'preact-redux'
import store from '../store'

import HeaderContainer from '../containers/HeaderContainer'
import IntroContainer from '../containers/IntroContainer'
import ModerationContainer from '../containers/ModerationContainer'
import TestimonialsContainer from '../containers/TestimonialsContainer'
import FooterContainer from '../containers/FooterContainer'
import PopupsContainer from '../containers/PopupsContainer'
import GuardContainer from '../containers/GuardContainer'

import Main from '../routes/main'
import AboutProject from '../routes/inner/about'
import Confidentiality from '../routes/inner/confidentiality'
import NotFound from '../routes/not-found'

import SmartTest from './smart-test'
import UsefullInfo from './usefull-info'

import api from '../api'

import style from '../style/index.scss'

import { openPopup } from '../actions/popup'
import { initSession } from '../actions/session'

const displayIntro = ({matches, path, url}) => (
	url === '/' || url === '/cards' ? <IntroContainer url={url} /> : null
)

const guard = ({url}) => <GuardContainer url={url} />

const categoriesTitle = (url) => {
	switch(url) {
		case '/':
			return 'Займы по категориям'
		case '/cards':
			return 'Кредитные карты по категориям'
		default:
			return ''
	}
}

const categoriesToggle = (onToggle) => ({matches, path, url}) => (
	url === '/' || url === '/cards' ? <button class="categories-button" onClick={onToggle}>
		{categoriesTitle(url)}
	</button> : null
)

const displayPopups = ({matches, path, url}) => (
	<PopupsContainer url={url} />
)

class App extends Component {
	state = {
		app: 'app'
	}

	componentDidMount() {
		store.dispatch(initSession())
	}

	handleRoute = e => {
		this.currentUrl = e.url

		this.appPadding()
		window.scrollTo(0, 0)
	}

	handleCategories = (event) => {
		event.preventDefault()
		store.dispatch(openPopup('categories'))
	}

	appPadding = () => {
		if(this.currentUrl === '/' || this.currentUrl === '/cards') {
			this.setState({app: 'app partners'})
		} else {
			this.setState({app: 'app'})
		}
	}

	render(props, {app}) {
		return (
			<Provider store={store}>
				<div id="app" class="app">
					<HeaderContainer />
					<Router onChange={this.handleRoute}>
						<Main path="/" partners="mfo" />
						<Main path="/cards" partners="cards" />
						<ModerationContainer path="/moderate" />
						<TestimonialsContainer path="/testimonials/:id" />
						<AboutProject path="/about" />
						<Confidentiality path="/confidentiality" />
						<SmartTest path="/smart-test" />
						<NotFound default />
					</Router>
					<UsefullInfo />
					<FooterContainer />
					<Match>{guard}</Match>
					<Match>{displayPopups}</Match>
					{/* <Match>{categoriesToggle(this.handleCategories)}</Match> */}
				</div>
			</Provider>
		)
	}
}

export default App
