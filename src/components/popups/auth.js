import { h, Component } from 'preact'

class Auth extends Component {
  state = {
    login: '',
    pass: ''
  }

  handleLogin = (event) => {
		event.preventDefault()

    const {onSubmit} = this.props
		const {login, pass} = this.state

		onSubmit(login, pass)
	}

	handleChange = (event) => {
		const input = event.target
		this.setState({[input.name]: input.value})
	}

  render({error}, {login, pass}) {
    return (
      <div class="login">
        <h2>Авторизация</h2>
        <form action="#" onSubmit={this.handleSubmit}>
          <label>Логин: <input type="text" name="login" onChange={this.handleChange} value={login} /></label>
          <label>Пароль: <input type="password" name="pass" onChange={this.handleChange} value={pass} /></label>
          {error && <p>Не верно введен логин или пароль.</p>}
          <button>Войти</button>
        </form>
      </div>
    )
  }
}

export default Auth
