import { h, Component } from 'preact'

import style from './style.scss'

import Button from '../utility/Button'

class Push extends Component {
  render({isOpen, onAccept, onDecline}) {
    return (
      <div class={`${style.push} ${isOpen ? style.active : ''}`}>
        <button class={style.closeButton} onClick={onDecline}></button>
        <p>Раз в 2-3 недели мы добавляем проверенные займы. Хотите получать их спецпредложения для первых клиентов?</p>
        <ul>
          <li>
            <a href="#" onClick={onDecline}>Нет, спасибо</a>
          </li>
          <li>
            <Button class={style.button} id="accept" onClick={onAccept}>Продолжить</Button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Push
