import { h, Component } from 'preact'

import style from './style.scss'

class Answer extends Component {
  handleClick = (event) => {
    event.preventDefault()

    const {onAnswer} = this.props

    const answer = event.target.getAttribute('data-index')
    onAnswer(parseInt(answer))
  }

  render({answers, selected, isReady = true}) {
    return (
      <div class={`${style.answer} ${!isReady ? style.waiting : ''}`}>
        <ul>
          {answers.map((answer, i) => (
            <li key={i}>
              {selected === undefined ? <button onClick={this.handleClick} data-index={i}>{answer}</button>
                : <span class={i === selected ? style.active : ''} data-i={i}>{answer}</span>}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Answer
