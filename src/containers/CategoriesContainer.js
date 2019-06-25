import { h, Component } from 'preact'
import {connect} from 'preact-redux'

import CategoriesList from '../components/popups/categories'
import { categories, categoriesIndex } from '../components/popups/const'
import { categoriesType, categoriesName,
  getCategoriesValue } from '../selectors/filters'

import { changeFilter } from '../actions/filters'

const mapStateToProps = (state, {url, theme}) => ({
  value: getCategoriesValue(state, url),
  categories: categories[categoriesType(url)],
  theme
})

const mapDispatchToProps = (dispatch, {url}) => ({
  onChange(value, id) {
    const index = categoriesIndex[categoriesName(url)][id]
    const newValue = value.map((v, i) => i === index ? !v : false)
    dispatch(changeFilter(categoriesName(url), newValue))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesList)
