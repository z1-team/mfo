import { h, Component } from 'preact'

import style from './style.scss'

import { sortButtons } from './const'

class ResultsSort extends Component {
  sortButtons() {
    const { url } = this.props

    return (
      sortButtons[url] || sortButtons.mfo
    )
  }

  sortButtonClass(id) {
    const { sortInfo } = this.props
    const order = sortInfo.isAscending ? style.up : style.down

    if(sortInfo.sortBy === id) {
      return `${style.active} ${order}`
    }

    return ''
  }

  render({sortInfo, onClick}) {
    return(
      <div class={style.sort}>
        <p>Сортировать:</p>
        <ul>
          {this.sortButtons().map(({id, title}) => (
            <li key={id}>
              <button class={this.sortButtonClass(id)} onClick={onClick} data-id={id}>{title}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ResultsSort
