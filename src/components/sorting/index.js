import { h } from 'preact'
import SortingCommon from 'common/components/Sorting'

import style from './style.scss'

const Sorting = ({sortInfo, sortButtons, onClick}) => <SortingCommon
  sortInfo={sortInfo}
  sortButtons={sortButtons}
  onClick={onClick}
/>

export default Sorting
