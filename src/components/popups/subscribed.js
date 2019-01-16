import { h } from 'preact'

import style from './styles/subscribed.scss'

const Subscribed = ({onClose}) => (
  <div class={style.subscribed}>
    <a href="#" class={style.close} onClick={onClose}></a>
    <p>Спасибо за подписку!</p>
  </div>
)

export default Subscribed
