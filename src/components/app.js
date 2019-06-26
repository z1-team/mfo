import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Match from 'preact-router/match'
import { Provider } from 'preact-redux'
import { createContext } from 'preact-context'
import store from '../store'
import '../counter'

import HeaderContainer from '../containers/HeaderContainer'
import IntroContainer from '../containers/IntroContainer'
import ModerationContainer from '../containers/ModerationContainer'
import TestimonialsContainer from '../containers/TestimonialsContainer'
import FooterContainer from '../containers/FooterContainer'
import PopupsContainer from '../containers/PopupsContainer'
import GuardContainer from '../containers/GuardContainer'
import CookiesContainer from '../containers/CookiesContainer'
import BotTestContainer from '../containers/BotTestContainer'
import PushContainer from '../containers/PushContainer'
import ScrollContainer from '../containers/ScrollContainer'

import Main from '../routes/main'
import AboutProject from '../routes/inner/about'
import Confidentiality from '../routes/inner/confidentiality'
import NotFound from '../routes/not-found'

import ToTop from './to-top'

import api from '../api'

import style from '../style/index.scss'

import { openPopup } from '../actions/popup'
import { initSession } from '../actions/session'
import { fetchPartners } from '../actions/partners'
import { resetFilters } from '../actions/filters'
import { sendEvent, changeDirectionEvent } from '../actions/events'

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

const categoriesToggle = (onToggle) => ({url}) => (
	url === '/' || url === '/cards' ? <button class="categories-button" onClick={onToggle}>
		{categoriesTitle(url)}
	</button> : null
)

const displayPopups = ({url}) => (
	<PopupsContainer url={url} />
)

const getCookieItem = () => {
	if (typeof window !== 'undefined') {
		return window.localStorage ? localStorage.getItem('agreeWithCookie') : false
	} else {
		return true
	}
}

const scrollContainer = ({url}) => (
	<ScrollContainer url={url} />
)

export const ThemeContext = createContext({theme: 'default'})

const themesNames = [
	'scooter', 'green', 'cherry',
	'lush', 'frost', 'royal', 'sunset'
]

function generateTheme() {
	const index = Math.floor(Math.random() * themesNames.length)
	return themesNames[index]
}

function loadTheme() {
	const savedTheme = localStorage.getItem('themeName')
	if (savedTheme) {
		return savedTheme
	}
	const themeName = generateTheme()
	localStorage.setItem('themeName', themeName)
	return themeName
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			app: 'app',
			theme: loadTheme()
		}
	}

	componentDidMount() {
		const {theme} = this.state
		store.dispatch(initSession(theme))
		store.dispatch(fetchPartners())
	}

	handleRoute = e => {
		if (this.currentUrl) {
			const event = changeDirectionEvent(e.url)
			store.dispatch(sendEvent(event))
			store.dispatch(resetFilters())
		}

		this.currentUrl = e.url
		// this.appPadding()

		if (typeof window !== 'undefined') {
			window.scroll(0, 0)
		}
	}

	handleCategories = (event) => {
		event.preventDefault()
		store.dispatch(openPopup('categories'))
	}

	appPadding = () => {
		if(this.currentUrl === '/' || this.currentUrl === '/cards') {
			this.setState({app: `app ${style[color]}`})
		} else {
			this.setState({app: 'app'})
		}
	}

	render(props, {app, theme, isVisible}) {
		const cookie = getCookieItem()
		const value = {theme}
		return (
			<Provider store={store}>
				<ThemeContext.Provider value={value}>
					<div id="app" class={`app`}>
						<HeaderContainer />
						<Router onChange={this.handleRoute}>
							<BotTestContainer path="/" partners="mfo" />
							<BotTestContainer path="/cards" partners="cards" />
							<ModerationContainer path="/moderate" />
							<TestimonialsContainer path="/testimonials/:id" />
							<AboutProject path="/about" />
							<Confidentiality path="/confidentiality" />
							<NotFound default />
						</Router>
						<FooterContainer />
						<Match>{guard}</Match>
						<Match>{displayPopups}</Match>
						{/* <Match>{categoriesToggle(this.handleCategories)}</Match> */}
						{!cookie && <CookiesContainer />}
						<ToTop theme={value.theme} />
						<PushContainer />
						<Match>{scrollContainer}</Match>
					</div>
				</ThemeContext.Provider>
			</Provider>
		)
	}
}

export default App
