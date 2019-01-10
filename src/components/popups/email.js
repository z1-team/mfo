import { h, Component } from 'preact'

import style from './style.scss'

class EmailPopups extends Component {
	state = {
		email: ''
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const { email } = this.state

		onSubmit(email)
	}

	handleChange = (event) => {
		const value = event.target.value

		this.setState({email: value})
	}

	render(props, {email}) {
		return (
			<div>
				<figure>
					<img src="/img/email-catcher.png"/>
				</figure>
				<form action="#" onSubmit={this.handleSubmit}>
					<p>Вышлем спецпредложения от премиум-партнеров</p>
					<input name="email" type="email" placeholder="Ваш email" onChange={this.handleChange} value={email} required />
					<button>Жду на почту</button>
				</form>
			</div>
		)
	}
}

export default EmailPopups
