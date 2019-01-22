import { h, Component } from 'preact'

import { Link } from 'preact-router/match'

import style from './styles/email.scss'

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

	handleClose = (event) => {
		event.preventDefault()

		const { onClose } = this.props
		onClose()
	}

	render(props, {email}) {
		return (
			<div class={style.email}>
				<a href="#" class={style.close} onClick={this.handleClose}></a>
				<figure>
					<img src="/assets/img/email-catcher.png"/>
				</figure>
				<form action="#" onSubmit={this.handleSubmit}>
					<p>Вышлем спецпредложения от премиум-партнеров</p>
					<input name="email" type="email" placeholder="Ваш email" onChange={this.handleChange} value={email} required />
					<button>Жду на почту</button>
					<div class={style.agreement}>
						<input id="email-agreement" type="checkbox" checked="checked" required />
						<label htmlFor="email-agreement">Я согласен с <Link href="/confidentiality">политикой конфиденциальности</Link></label>
					</div>
				</form>
			</div>
		)
	}
}

export default EmailPopups
