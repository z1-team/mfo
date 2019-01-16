import { h, Component } from 'preact'

import style from './styles/tabs.scss'

class Tabs extends Component {
  handleChange = (event) => {
    event.preventDefault()

    const {onChange} = this.props
    const tab = event.target.getAttribute('data-tab')

    onChange(tab)
  }

  render({selected, tabs, children}) {
    return (
      <section>
        <ul class={style.tabs}>
          {tabs.map((tab) => (
            <li>
              <button key={tab.id} onClick={this.handleChange} data-tab={tab.id} class={tab.id === selected ? style.active : ''}>
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        {children}
      </section>
    )
  }
}

export default Tabs
