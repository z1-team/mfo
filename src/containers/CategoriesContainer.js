import { h, Component } from 'preact'
import {connect} from 'preact-redux'

import CategoriesList from '../components/popups/categories'
import { categories, categoriesIndex } from '../components/popups/const'

const mapStateToProps = (state, {url}) => ({
  categories: categories.mfo
})

class CategoriesContainer extends Component {
  render({categories}) {
    return (
      <CategoriesList categories={categories} />
    )
  }
}

export default connect(mapStateToProps)(CategoriesList)
