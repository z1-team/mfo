import { h, Component } from 'preact'

import style from './style.scss'

class Push extends Component {
  render({isOpen, onAccept, onDecline}) {
    console.log(isOpen)
    return (
      <div class={`${style.push} ${isOpen ? style.active : ''}`}>
        <p>Раз в 2-3 недели мы добавляем проверенные займы. Хотите получать их спецпредложения для первых клиентов?</p>
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
