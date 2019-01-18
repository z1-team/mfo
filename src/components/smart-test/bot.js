import { h, Component } from 'preact'

import Message from './question'
import Answer from './answer'

import style from './style.scss'

import { QA, advice } from './const'

const getStep = (step, answer) => (
  step === 0 && answer === 1 ? QA.length : Math.min(step+1, QA.length)
)

class JustBot extends Component {
  state = {
    step: 0,
    answers: []
  }

  componentDidUpdate = () => {
    const {onEnd} = this.props
    const {step} = this.state

    if(step === QA.length) {
      onEnd()
    }
  }

  handleAnswer = (answer) => {
    const {onEnd} = this.props

    this.setState(prev => ({
      step: getStep(prev.step, answer),
      answers: prev.answers.concat(answer)
    }))
  }

  render(props, {step, answers}) {
    const isLast = step === QA.length
    return (
      <div class={style.smartTest}>
        {answers.map((answer, index) => (
          <div key={index}>
            <Message message={QA[index].question} />
            <Answer answers={QA[index].answers} selected={answer} onAnswer={this.handleAnswer} />
          </div>
        ))}
        <Message message={isLast ? advice : QA[step].question} />
        {!isLast && <Answer answers={QA[step].answers} onAnswer={this.handleAnswer} />}
      </div>
    )
  }
}

export default JustBot
