import { Map } from 'immutable';
import actions from '../actions/app'
import products from '../../data/products'
import categories from '../../data/categories'
import { 
  filterProducts, 
  sortProducts, 
  updateFilters,
  getQuantityRange,
  getpriceRange,
  searchProductsBySublevel,
  searchProductsInSublevelByQuery } from '../../utils'
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
  breadcrumb: ['Todos los productos'],
  sort: null,
  filters: [],
  productsFiltered: [],
  stockRange: getQuantityRange(),
  priceRange: getpriceRange()
})

export default function appReducer (state = initialState, action) {
  switch (action.type) {
    case actions.SELECT_ITEM:
      let finalProducts = action.products

      // Check if sort already applied
      if (state.get("sort")) {
        finalProducts = sortProducts(finalProducts, state.get("sort").key, state.get("sort").mode)
      }

      // If filters already applied
      let finalFilteredProducts = []
      if (state.get("filters").length) {
        finalFilteredProducts = filterProducts(finalProducts, state.get("filters"))
      }

      return state.set("products", finalProducts)
                  .set("itemSelected", action.item)
                  .set("breadcrumb", action.breadcrumb)
                  .set("productsFiltered", finalFilteredProducts)
    case actions.SORT_PRODUCTS:
      let key = "products"
      if (state.get("filters").length) {
        key = "productsFiltered"
      }
      const currentProducts = state.get(key);

      const sortedProducts = sortProducts(currentProducts, action.key, action.mode)

      return state.set(key, sortedProducts)
                  .set("sort", {key: action.key, mode: action.mode})
    case actions.FILTER_PRODUCTS:
      const cProducts = state.get("products")
      const cFilters = state.get("filters")

      const newFilters = updateFilters(cFilters, {key: action.key, value: action.value})

      const filteredProducts = filterProducts(cProducts, newFilters)
      
      return state.set("productsFiltered", filteredProducts)
                  .set("filters", newFilters)
    case actions.CLEAR_FILTERS:
      let clearedFinalProducts = []

      if (state.get("itemSelected")) {
        let productsFilteredCleared = []
        searchProductsBySublevel(state.get("itemSelected"), productsFilteredCleared);
        clearedFinalProducts = _.uniqBy(productsFilteredCleared, 'id');    
      } else {
        clearedFinalProducts = state.get("products") 
      }

      // if sorted is applied, sort original list
      if (state.get("sort")) {
        clearedFinalProducts = sortProducts(clearedFinalProducts, state.get("sort").key, state.get("sort").mode)  
      }

      return state.set("filters", [])
                  .set("productsFiltered", [])
                  .set("products", clearedFinalProducts)
    case actions.SEARCH_IN_SUBLEVEL:
      let productsFilteredByQuery = searchProductsInSublevelByQuery(action.query, action.item)

      let productsKey = 'products'

      // If filters applied, apply it
      if (state.get("filters").length) {
        productsKey = 'productsFiltered'
        productsFilteredByQuery = filterProducts(productsFilteredByQuery, state.get("filters"))
      }

      // If sort applied, apply it
      if (state.get("sort")) {
        productsFilteredByQuery = sortProducts(productsFilteredByQuery, state.get("sort").key, state.get("sort").mode)  
      }

      console.log(productsFilteredByQuery)

      return state.set(productsKey, productsFilteredByQuery)
    default:
      return state
  }
}