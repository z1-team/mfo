import { h, Component } from 'preact'

import style from './style.scss'

class StarRating extends Component {
  render({rating}) {
    const star = Math.round(rating*20)

    return (
      <div class={style.stars}>
        <ul class={style.highlighted} style={{width: star + '%'}}>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
        </ul>
        <ul>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
          <li><i class="if fa-star"></i></li>
        </ul>
      </div>
    )
  }
}

export default StarRating
