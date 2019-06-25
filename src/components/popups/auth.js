import { h, Component } from 'preact'

import style from './styles/auth.scss'

class Auth extends Component {
  state = {
    login: '',
    pass: ''
  }

  handleSubmit = (event) => {
		event.preventDefault()
    const {onSubmit} = this.props
		const {login, pass} = this.state
		onSubmit(login, pass)
	}

	handleChange = (event) => {
		const input = event.target
		this.setState({[input.name]: input.value})
	}

  render({error, theme}, {login, pass}) {
    return (
      <div class={style.login}>
        <h2>Авторизация</h2>
        <form action="#" onSubmit={this.handleSubmit}>
          <label>Логин: <input type="text" name="login" onChange={this.handleChange} value={login} /></label>
          <label>Пароль: <input type="password" name="pass" onChange={this.handleChange} value={pass} /></label>
          {error && <p class={`theme-${theme}-text`}>Не верно введен логин или пароль.</p>}
          <button class={`theme-${theme}-button`}>Войти</button>
        </form>
      </div>
    )
  }
}

export default Auth
