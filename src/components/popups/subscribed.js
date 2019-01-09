import { h } from 'preact'

const Subscribed = ({onClose}) => (
  <div class="subscribed">
    <a href="#" class="close-popup" onClick={onClose}></a>
    <p>Спасибо за подписку!</p>
  </div>
)

export default Subscribed
