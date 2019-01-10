import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import CardInfo from './info'
import StarRating from '../star-rating'
import { repaymentOptions, getWays } from './icons'

import style from './style.scss'
import icons from './icons.scss'

class Card extends Component {
  handleOrder = (event) => {
    const {onOrder} = this.props
    if (typeof onOrder === 'function') {
      onOrder(this.props.item.title)
    }
  }

  handleEdit = () => {
    const {onEdit, dataID} = this.props

    if(typeof onEdit === 'function') {
      onEdit(dataID)
    }
  }

  handleOpen = () => {
    const {onMore, item} = this.props

    if(typeof onMore === 'function') {
      onMore(item.id, item.main.title)
    }
  }

  getWays() {
      const { item } = this.props
      const { get_ways } = item.filters

      if(get_ways) {
        return get_ways.map((item, index) => (
          item ? getWays[index] : false
        )).filter(i => i)
      }

      return false
  }

  getEnding() {
    const { item } = this.props
    const count = item.sortBy.testimonials_count
    const ending = count%10

    switch(ending) {
      case 1:
      case 2:
      case 3:
      case 4:
        return "отзыва"
      case 0:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      default:
        return "отзывов"
    }
  }

  render({item, tail, edit}) {
    const rating = Math.round(item.sortBy.rating*10)/10
    const star = Math.round(item.sortBy.rating*20)
    const label = item.main.special_label ? item.main.special_label : ''

    return (
      <div class={`${style.card} ${label}`}>
        {label === 'big_summ' ? <span class={style.label}>На большую сумму</span> : ''}
        {label === 'long_term' ? <span class={style.label}>На долгий период</span> : ''}
        {label === 'quick_solution' ? <span class={style.label}>Быстрое решение</span> : ''}
        {label === 'recommend' ? <span class={style.label}>Рекомендуют</span> : ''}
        <section>
          <figure>
            <img src={item.main.logo} />
          </figure>
          <div class={style.info}>
            <h3>{item.main.title}</h3>
            <div class={style.rating}>
              <StarRating rating={item.sortBy.rating} />
              <p><Link to={`/testimonials/${item.id}`}>{item.sortBy.testimonials_count} {this.getEnding()}</Link> {item.sortBy.rating && `(${rating} из 5)`}</p>
            </div>
            {item.type === 'mfo' && item.main &&
              <ul class={style.pros}>
                {item.main.money && <li><i class="far fa-money-bill-alt"></i><strong>{item.main.money}</strong> руб.</li>}
                {item.main.term && <li><i class="far fa-calendar-alt"></i><strong>{item.main.term}</strong></li>}
                {item.main.minRate && <li><i class="fas fa-percent"></i>от <strong>{item.main.minRate}</strong> в день</li>}
              </ul>
            }
            {item.type === 'cards' && item.main &&
              <ul class={style.pros}>
                {item.main.limit && <li><i class="far fa-credit-card"></i><strong>{item.main.limit}</strong> руб.</li>}
                {item.main.percent && <li><i class="fas fa-percent"></i>от <strong>{item.main.percent}</strong></li>}
                {item.main.cashback && <li><i class="far fa-money-bill-alt"></i><strong>{item.main.cashback}</strong></li>}
              </ul>
            }
            {this.getWays() &&
              <ul class={style.options}>
                <li>Способы получения: <span>{this.getWays().map(item => (<i key={item} class={`${icons.icon} ${icons[item]}`}></i>))}</span></li>
              </ul>
            }
          </div>
          <div class={style.process}>
            {edit && <button onClick={this.handleEdit}><i class="fas fa-edit"></i></button>}
            <a target="_blank" href={`${item.main.link}?${tail}`} rel="nofollow noopener" onClick={this.handleOrder}>Оформить</a>
          </div>
        </section>
        <CardInfo details={item.details} main={item.main} onOpen={this.handleOpen}/>
      </div>
    )
  }
}

export default Card
