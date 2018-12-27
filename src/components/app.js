import { h, Component } from 'preact'
import { Router } from 'preact-router'

import HeaderContainer from '../containers/HeaderContainer'

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

const displayIntro = ({matches, path, url}) => (
	url === '/' ? <IntroContainer /> : null
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
			<div id="app">
				<HeaderContainer />
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
		)
	}
}

export default App
