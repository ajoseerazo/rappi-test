import categories from '../../data/categories';
import { searchProductsBySublevel, getBreadcrumb } from '../../utils'
import _ from 'lodash';

const appActions = {
  SELECT_ITEM: 'SELECT_ITEM',
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
  }
}

export default appActions