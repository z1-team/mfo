import { h, Component } from 'preact'
import Button from 'common/components/Button'

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

  render({error}, {login, pass}) {
    return (
      <div class={style.login}>
        <h2>Авторизация</h2>
        <form action="#" onSubmit={this.handleSubmit}>
          <label>Логин: <input type="text" name="login" onChange={this.handleChange} value={login} /></label>
          <label>Пароль: <input type="password" name="pass" onChange={this.handleChange} value={pass} /></label>
          {error && <p>Не верно введен логин или пароль.</p>}
          <Button class={style.button}>Войти</Button>
        </form>
      </div>
    )
  }
}

export default Auth
