import { h } from 'preact'

import style from './style.scss'

const Subscribed = ({onClose}) => (
  <div class="subscribed">
    <a href="#" class="close-popup" onClick={onClose}></a>
    <p>Спасибо за подписку!</p>
  </div>
)

export default Subscribed
