import { h, Component } from 'preact'

import { mfoFilters, cardsFilters, categoriesNames } from './filters'

import CheckboxFilter from './checkbox'
import RadioFilter from './radio'
import SearchModule from './module'
import RangeInput from 'common/components/RangeInput'
import StickyBox from 'react-sticky-box/src'

import style from './style.scss'

const filterName = {
  mfo: mfoFilters,
  cards: cardsFilters
}

class Filters extends Component {
  constructor(props) {
		super(props)

		this.state = {
			summ_value: 1,
			term_value: 1,
			limit_value: 1,
			rate_value: 1
		}
	}

  handleChange = (name, value) => {
    const {onChange} = this.props

    if(this.state[name] && value === null) {
			this.setState(prev => ({
				[name]: prev[name]+1
			}))
		}

    onChange(name, value)
  }

  filtersType(filter) {
    const {filters, actual, onChange} = this.props
    const counter = this.state

    switch(filter.type) {
      case 'checkbox':
        return (
          <CheckboxFilter name={filter.name}
  					items={filter.items}
  					value={filters[filter.name]}
  					actual={actual[filter.name] || null}
  					onChange={onChange} />
        )
      case 'radio':
        return (
          <RadioFilter name={filter.name}
  					items={filter.items}
  					value={filters[filter.name]}
  					actual={actual[filter.name] || null}
  					onChange={onChange} />
        )
      case 'range':
        return (
          <RangeInput key={counter[filter.name]} class={style.rangeInput}
            name={filter.name} label={filter.label}
            start={filter.start} end={filter.end} step={filter.step}
            onChange={onChange} />
        )
      default:
        return <div>{filter.type} is not defined in switch</div>
    }
  }

  isFilterActive = (filter, type) => {
    if(filter) {
      switch(type) {
        case 'range':
        return filter !== null
        default:
        return filter.some(f => f)
      }
    }
    return false
  }

  render({url, total, location, filters}) {
    const filtersNames = filterName[url] || filterName.mfo
    const categories = categoriesNames[url] || categoriesNames.mfo

    return (
      <StickyBox offsetTop={66} offsetBottom={20}>
        <div class={style.sidebar}>
          <div class={style.header}>
            <p>Всего микрозаймов: <strong>{total}</strong></p>
            <p>Найдено в: <strong>{location}</strong></p>
          </div>
          {filtersNames.map(filter => (
            <SearchModule title={filter.title} name={filter.name} onChange={this.handleChange} isActive={this.isFilterActive(filters[filter.name], filter.type)}>
              {this.filtersType(filter)}
            </SearchModule>
          ))}
        </div>
        {/* <div class={style.categories}>
          <SearchModule title={categories.title} name={categories.name} onChange={this.handleChange} isActive={this.isFilterActive(filters[categories.name], categories.type)}>
            {this.filtersType(categories)}
          </SearchModule>
        </div> */}
      </StickyBox>
    )
  }
}

export default Filters
