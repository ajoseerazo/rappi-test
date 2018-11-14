import { Map } from 'immutable';
import actions from '../actions/app'
import products from '../../data/products'
import categories from '../../data/categories'

const initialState = new Map({
  products,
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
    default:
      return state
  }
}