export const categoriesType = (url) => (
  url === '/' ? 'mfo'
  : url === '/cards' ? 'cards'
  : 'mfo'
)

export const categoriesName = (url) => `category_${categoriesType(url)}`

export const getFilters = (state) => state.filters

export const getCategoriesValue = (state, url) => (
  getFilters(state)[categoriesName(url)]
)
