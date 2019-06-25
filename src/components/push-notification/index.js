import { h, Component } from 'preact'
import { ThemeContext } from '../app'

import style from './style.scss'

import Button from '../utility/Button'

class Push extends Component {
  render({isOpen, onAccept, onDecline}) {
    return (
      <ThemeContext.Consumer>
        {({theme}) => (
          <div class={`theme-${theme}-border ${style.normal} ${isOpen ? style.active : ''}`}>
            <button class={`theme-${theme}-close ${style.closeButton}`} onClick={onDecline}></button>
            <p>Раз в 2-3 недели мы добавляем проверенные займы. Хотите получать их спецпредложения для первых клиентов?</p>
            <ul>
              <li>
                <a href="#" class={`theme-${theme}-text`} onClick={onDecline}>Нет, спасибо</a>
              </li>
              <li>
                <Button class={style.button} id="accept" onClick={onAccept}>Продолжить</Button>
              </li>
            </ul>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Push
