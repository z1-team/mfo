import { h, Component } from 'preact'

const sortButtons = {
  mfo: [
    {title: "По сумме", id: "summ"},
    {title: "По срокам", id: "term"},
    {title: "По процентной ставке", id: "rate"}
  ],
  cards: [
    {title: "По кредитному лимиту", id: "limit"},
    {title: "По процентной ставке", id: "rate"},
    {title: "По кэшбэку", id: "cashback"}
  ]
}

class ResultsSort extends Component {
  sortButtons() {
    const { url } = this.props

    return (
      sortButtons[url] || sortButtons.mfo
    )
  }

  sortButtonClass(id) {
    const { sortInfo } = this.props
    const order = sortInfo.isAscending ? " up" : " down"

    if(sortInfo.sortBy === id) {
      return "active" + order
    }

    return ''
  }

  render({sortInfo, onClick}) {
    return(
      <div class="sort">
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
