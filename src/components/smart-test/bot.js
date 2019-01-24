import { h, Component } from 'preact'

import Message from './question'
import Answer from './answer'

import style from './style.scss'

import { QA, advice } from './const'

const getStep = (step, answer) => (
  step === 0 && answer === 1 ? QA.length : Math.min(step+1, QA.length)
)

const getRandom = () => (
  Math.random()*1000+500
)

class JustBot extends Component {
  constructor(props) {
    super(props)
    const {onEnd, answers} = props
    this.state = {
      step: answers.length,
      answers: answers,
      isReady: false
    }
    if(answers.length === QA.length) {
      onEnd()
    }
  }

  componentDidMount = () => {
    setTimeout(() => (
      this.setState({isReady: true})
    ), 2000)
  }

  componentDidUpdate = () => {
    const {onEnd} = this.props
    const {step} = this.state

    if(step === QA.length) {
      setTimeout(onEnd, 2000)
    }

    setTimeout(() => {
      window.scroll({
        top: this.getMessageOffset(),
        behavior: "smooth"
      })
    }, step === QA.length ? 2020 : 20)
  }

  getMessageOffset() {
    const m = this.message
    return m.getBoundingClientRect().top + window.scrollY - 70
  }

  handleAnswer = (answer) => {
    const {step} = this.state
    const {onAnswer} = this.props
    this.setState(prev => ({
      step: getStep(prev.step, answer),
      answers: prev.answers.concat(answer),
      isReady: false
    }))
    setTimeout(() => (
      this.setState({isReady: true})
    ), getRandom())
    onAnswer(answer, QA[step].question, QA[step].answers[answer])
  }

  saveRef = ref => this.message = ref

  render(props, {step, answers, isReady}) {
    const isLast = step === QA.length
    return (
      <div class={style.smartTest}>
        {answers.map((answer, index) => (
          <div key={index}>
            <Message message={QA[index].question} />
            <Answer answers={QA[index].answers} selected={answer} onAnswer={this.handleAnswer} />
          </div>
        ))}
        <div ref={this.saveRef}></div>
        <Message isReady={isReady} message={isLast ? advice : QA[step].question} />
        {!isLast && <Answer isReady={isReady} answers={QA[step].answers} onAnswer={this.handleAnswer} />}
      </div>
    )
  }
}

export default JustBot
