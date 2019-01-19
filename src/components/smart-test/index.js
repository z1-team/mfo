import { h, Component } from 'preact'

import BotContainer from '../../containers/BotContainer'
import ResultContainer from '../../containers/ResultContainer'

import style from './style.scss'

class SmartTest extends Component {
  state = {
    done: false
  }

  handleEnd = () => {
    this.setState({done: true})
  }

  render(props, {done}) {
    return (
      <div class={style.wrSmartTest}>
        <div class="container">
          <BotContainer onEnd={this.handleEnd} />
          {done && <ResultContainer partners="mfo" />}
        </div>
      </div>
    )
  }
}

export default SmartTest
