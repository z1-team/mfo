import { h, Component } from 'preact'

import style from './style.scss'

import { month } from './const.js'

class NotFound extends Component {
  getDate = () => {
    const date = new Date()
    return month[date.getMonth()] + ', ' + date.getDate() + ', ' + date.getFullYear() + ' в ' + date.getHours() + ':' + date.getMinutes()
  }

  render() {
    return (
      <div class={style.wrSmartTest}>
        <div class="container">
          <div class={style.smartTest}>
            <div class={style.question}>
              <figure>
                <img src="/assets/img/alice.png"/>
              </figure>
              <div>
                <h4>Алиса ({this.getDate()})</h4>
                <p>Здравствуйте! Меня зовут Алиса. Я ваш личный помошник по подбору микрозаймов непосредственно в вашем городе. Я вам задам несколько вопросов и по результатам ответов предложу вам самые выгодные варианты для вас.</p>
              </div>
            </div>
            <div class={style.answer}>
              <ul>
                <li>
                  <button>Да</button>
                </li>
                <li>
                  <button>Нет</button>
                </li>
                <li>
                  <button>Потом</button>
                </li>
              </ul>
            </div>
            <div class={style.question}>
              <figure>
                <img src="/assets/img/alice.png"/>
              </figure>
              <div>
                <h4>Алиса ({this.getDate()})</h4>
                <p>Здравствуйте! Меня зовут Алиса. Я ваш личный помошник по подбору микрозаймов непосредственно в вашем городе. Я вам задам несколько вопросов и по результатам ответов предложу вам самые выгодные варианты для вас.</p>
              </div>
            </div>
            <div class={style.answer}>
              <ul>
                <li>
                  <button>Да</button>
                </li>
                <li>
                  <button>Нет</button>
                </li>
                <li>
                  <button>Потом</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
