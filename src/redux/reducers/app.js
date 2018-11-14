import { Map } from 'immutable';
import actions from '../actions/app'
import products from '../../data/products'
import categories from '../../data/categories'
import _ from 'lodash'

const initialState = new Map({
  products: products.map(p => {
    return {
      ...p,
      priceNumber: parseFloat(p.price.replace(/,/g, "").replace(/\$/g, ""))
    }
  }),
  categories,
  itemSelected: null,
  breadcrumb: ['Todos']
})

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_ITEM:
      return state.set("products", action.products)
                  .set("itemSelected", action.item)
                  .set("breadcrumb", action.breadcrumb)
    case actions.SORT_PRODUCTS:
      const currentProducts = state.get("products");

      const sortedProducts = _.orderBy(currentProducts, action.key, action.mode)

      return state.set("products", sortedProducts)
    default:
      return state
  }
}