import { h } from 'preact'

const Sended = ({onClose}) => (
  <div class="sended">
    <p>Ваш отзыв отправлен на модерацию. Спасибо!</p>
    <a href="#" onClick={onClose}>Хорошо</a>
  </div>
)

export default Sended
