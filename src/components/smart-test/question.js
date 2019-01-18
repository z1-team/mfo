import { h } from 'preact'

import { month } from './const.js'

import style from './style.scss'

const getDate = () => {
  const date = new Date()
  const f = v => v < 10 ? '0' + v : v
  return month[date.getMonth()] + ', ' + date.getDate() + ', ' + date.getFullYear() + ' в ' + date.getHours() + ':' + f(date.getMinutes())
}

const Message = ({message}) => (
  <div class={style.message}>
    <figure>
      <img src="/assets/img/alice.png"/>
    </figure>
    <div>
      <h4>Алиса ({getDate()})</h4>
      <p>{message}</p>
    </div>
  </div>
)

export default Message
