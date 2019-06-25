import { h, Component } from 'preact'

import style from './style.scss'

class ResultsSort extends Component {

  sortButtonClass(id) {
    const { sortInfo } = this.props
    const order = sortInfo.isAscending ? style.up : style.down

    if(sortInfo.sortBy === id) {
      return `${style.active} ${order}`
    }

    return ''
  }

  handleClick = (event) => {
    event.preventDefault()
    const {onClick} = this.props
    const sortBy = event.target.getAttribute('data-id')

    if(typeof onClick === 'function') {
      onClick(sortBy)
    }
  }

  render({sortButtons}) {
    return(
      <div class={style.sort}>
        <p>Сортировать:</p>
        <ul>
          {sortButtons.map(({id, title}) => (
            <li key={id}>
              <button class={this.sortButtonClass(id)} onClick={this.handleClick} data-id={id}>{title}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResultsSort
