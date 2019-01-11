import { h } from 'preact'

import style from './styles/testimonials.scss'

const Sended = ({onClose}) => (
  <div class={style.sended}>
    <p>Ваш отзыв отправлен на модерацию. Спасибо!</p>
    <a href="#" onClick={onClose}>Хорошо</a>
  </div>
)

export default Sended
