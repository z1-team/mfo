import { h, Component } from 'preact'

import Logo from './logo'
import Main from './main'
import Specials from './specials'
import Details from './details'
import Categories from './categories'
import Filters from './filters'
import Sort from './sort'

import Tabs from './tabs'
import Tab from './tab'
import { tabs, mainNames } from './const'

import style from './styles/style.scss'

class EditPopup extends Component {

  state = {
    changed: false,
    tab: "main"
  }

  changes = {
    main: {},
    details: {},
    filters: {},
    filter_values: {},
    sortBy: {}
  }

  changeTab = (tab) => {
    this.setState({ tab })
  }

  closePopup = (event) => {
		event.preventDefault()
    const {onClose} = this.props
		onClose()
	}

  handleChange = (type, field, value) => {
    this.changes[type][field] = value
    this.setState({changed: true})
  }

  handleSave = (event) => {
    event.preventDefault()

    const {partner, onSave} = this.props

    const partner_ = {
      id: partner.id,
      type: partner.type,
      main: {
        ...partner.main,
        ...this.changes.main
      },
      details: {
        ...partner.details,
        ...this.changes.details
      },
      filters: {
        ...partner.filters,
        ...this.changes.filters
      },
      filter_values: {
          ...partner.filter_values,
          ...this.changes.filter_values
      },
      sortBy: {
        ...partner.sortBy || {},
        ...this.changes.sortBy
      }
    }

    this.setState({changed: false})

    onSave(partner.id, partner_)
  }

  handleDelete = (event) => {
    event.preventDefault()
    const {partner, onDelete} = this.props
    onDelete(partner.id)
  }

  handleCancel = (event) => {
    event.preventDefault()
    const {onCancel} = this.props
    onCancel()
  }

  isOpened(tab) {
    return tab === this.state.tab
  }

  getCategories() {
    const {partner} = this.props
    const type = partner.type

    switch(type) {
      case 'mfo':
        return partner.filters.category_mfo
      case 'cards':
        return partner.filters.category_cards
      default:
        return []
    }
  }

  render({partner}, {tab}) {
    if(!partner) return null

    return (
      <form class={style.edit} action="#">
        <header>
          <h3>Редактирование карточки <strong>партнера</strong></h3>
          <button onClick={this.closePopup}></button>
        </header>
        <Tabs selected={tab} onChange={this.changeTab} tabs={tabs}>
          <Tab isOpen={this.isOpened("main")} name="main">
            <Logo logo={partner.main.logo} onChange={this.handleChange} />
            <Main names={mainNames} main={partner.main} onChange={this.handleChange} />
            <Specials value={partner.main.special_label} onChange={this.handleChange} />
          </Tab>
          <Tab isOpen={this.isOpened("details")} name="details">
            <Details details={partner.details} onChange={this.handleChange} />
          </Tab>
          <Tab isOpen={this.isOpened("categories")} name="categories">
            <Categories categories={this.getCategories()} type={partner.type} onChange={this.handleChange} />
          </Tab>
          <Tab isOpen={this.isOpened("filters")} name="filters">
            <Filters values={partner.filter_values} filters={partner.filters} onChange={this.handleChange}/>
          </Tab>
          <Tab isOpen={this.isOpened("sort")} name="sort">
            <Sort type={partner.type} sortInfo={partner.sortBy} onChange={this.handleChange} />
          </Tab>
        </Tabs>
        <footer>
          <ul>
            <li>
              <button class={this.state.changed ? 'active' : ''} onClick={this.handleSave}>Сохранить</button>
            </li>
            <li>
              <button onClick={this.handleDelete}>Удалить</button>
            </li>
          </ul>
          <button onClick={this.handleCancel}>Отмена</button>
        </footer>
      </form>
    )
  }
}

export default EditPopup
