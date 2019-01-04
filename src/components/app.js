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

import Main from '../routes/main'
import NotFound from '../routes/not-found'

import UsefullInfo from './usefull-info'

const displayIntro = ({matches, path, url}) => (
	url === '/' || url === '/cards' ? <IntroContainer /> : null
)

class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	render() {
		return (
			<Provider store={store}>
				<div id="app">
					<HeaderContainer city="Minsk" />
					<Match path="/">{displayIntro}</Match>
					<Router onChange={this.handleRoute}>
						<Main path="/" partners="mfo" />
						<Main path="/cards" partners="cards" />
						<ModerationContainer path="/moderate" />
						<TestimonialsContainer path="/testimonials/:id" />
						<NotFound default />
					</Router>
					<UsefullInfo />
					<FooterContainer />
					<PopupsContainer />
				</div>
			</Provider>
		)
	}
}

export default App
