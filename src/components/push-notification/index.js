import { h, Component } from 'preact'

import style from './style.scss'

class Push extends Component {
  render({isOpen, onAccept, onDecline}) {
    return (
      <div class={`${style.push} ${isOpen ? style.active : ''}`}>
        <p>Мы можем оповещать вас о важных статьях и новостях. Обычно такие выходят 2–3 раза в неделю</p>
        <ul>
          <li>
            <a href="#" onClick={onDecline}>Нет, спасибо</a>
          </li>
          <li>
            <button href="#" onClick={onAccept}>Продолжить</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Push
