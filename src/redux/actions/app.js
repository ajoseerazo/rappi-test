import categories from '../../data/categories';
import { searchProductsBySublevel, getBreadcrumb } from '../../utils'
import _ from 'lodash';

const appActions = {
  SELECT_ITEM: 'SELECT_ITEM',
  SORT_PRODUCTS: 'SORT_PRODUCTS',
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
  }
}

export default appActions