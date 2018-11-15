import categories from '../../data/categories';
import { searchProductsBySublevel, getBreadcrumb } from '../../utils'
import _ from 'lodash';

const appActions = {
  SELECT_ITEM: 'SELECT_ITEM',
  SORT_PRODUCTS: 'SORT_PRODUCTS',
  FILTER_PRODUCTS: 'FILTER_PRODUCTS',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  SEARCH_IN_SUBLEVEL: 'SEARCH_IN_SUBLEVEL',
  OPEN_FILTERS: 'OPEN_FILTERS',
  CLOSE_FILTERS: 'CLOSE_FILTERS',
  selectItem: (item) => {
    let productsFiltered = []

    searchProductsBySublevel(item, productsFiltered);

    productsFiltered = _.uniqBy(productsFiltered, 'id');    

    let found = {value: false}
    let breadcrumb = []
    getBreadcrumb(categories, item, breadcrumb, found)

    return {
      type: appActions.SELECT_ITEM,
      item,
      products: productsFiltered,
      breadcrumb
    }
  },
  sortProducts: ({key, mode}) => {
    return {
      type: appActions.SORT_PRODUCTS,
      key, 
      mode
    }
  },
  filterProducts: ({key, value}) => {
    return {
      type: appActions.FILTER_PRODUCTS,
      key,
      value
    }
  },
  clearFilters: () => {
    return {
      type: appActions.CLEAR_FILTERS
    }
  },
  searchInSublevel: (query, item) => {
    return {
      type: appActions.SEARCH_IN_SUBLEVEL,
      query,
      item
    }
  },
  closeFilters: () => {
    return {
      type: appActions.CLOSE_FILTERS
    }
  },
  openFilters: () => {
    return {
      type: appActions.OPEN_FILTERS
    }
  }
}

export default appActions