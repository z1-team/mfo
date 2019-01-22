import { h, Component } from 'preact'
import { Link } from 'preact-router/match'

import style from './style.scss'

class Cookie extends Component {
  state = {
    current: 'short',
    show: ''
  }

  componentDidMount() {
    this.setState({show: 'active'})
  }

  handleMore = (event) => {
    event.preventDefault()
    this.setState({current: 'all'})
  }

  handleAgree = (event) => {
    event.preventDefault()

    const {onAccept} = this.props
    this.setState({show: ''})
    onAccept()
  }

  render(props, {current, show}) {
    const getAgreement = localStorage.getItem('agreeWithCookie')

    if(getAgreement) {
      return null
    }

    return (
      <div class={`${style.cookie} ${style[show]} ${style[current]}`}>
        <div class={style.brief}>
          <div>
            <p>Сайт использует файлы cookies.</p>
            <a href="#" onClick={this.handleMore}>Подробнее</a>
          </div>
          <button onClick={this.handleAgree}>Ок, спасибо</button>
        </div>
        <div class={style.full}>
          <section>
            <h3>Сайт использует файлы cookies</h3>
            <p>Файл cookie - это небольшой фрагмент текста, передаваемый в браузер с сайта, который
              вы посетили. Он помогает сайту запомнить информацию о вас, например то, на каком языке
              вы предпочитаете его просматривать. Это будет полезно при следующем посещении этого же
              сайта. Благодаря файлам cookie просмотр сайтов становится значительно более удобным.</p>
            <p>Файлы cookie используются нами так же:</p>
            <ul>
              <li>для аналитики, например, для подсчета количества посещений страницы</li>
              <li>для того, чтобы дать вам возможность регистрироваться, авторизовываться
                через социальные сети и делиться информацией в социальных сетях.</li>
            </ul>
          </section>
          <footer>
            <button onClick={this.handleAgree}>Ок, спасибо</button>
            <Link href="/confidentiality">Политика конфиденциальности</Link>
          </footer>
        </div>
      </div>
    )
  }
}

export default Cookie
