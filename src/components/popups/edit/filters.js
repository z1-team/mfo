import { h } from 'preact'

import Range from './range'
import Filter from './filter'

import { filterValuesNames, filterNames } from './const'

import style from './styles/filters.scss'

const own = o => Object.getOwnPropertyNames(o)
const withoutCat = o => Object.getOwnPropertyNames(o).filter(f => f !== "category_mfo" && f !== "category_cards")

const Filters = ({values, filters, onChange}) => (
  <div class={style.filters}>
    {own(values).map((filter, index) => (
      <Range name={filter} key={index} title={filterValuesNames[filter]}
        values={values[filter]} onChange={onChange} />
    ))}
    {withoutCat(filters).map((filter, index) => (
      <Filter name={filter} key={filter} title={filterNames[filter].title}
        names={filterNames[filter].names} values={filters[filter]}
        onChange={onChange} />
    ))}
  </div>
)

export default Filters
