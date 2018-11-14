import { Map } from 'immutable'
import actions from '../actions/cart'
import _ from 'lodash'
import { updateCartInLocalStorage, getCartFromLocalStorage } from '../../utils'

const initialState = new Map({
  products: []
})

export default function cartReducer (state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const currentProducts = state.get("products")

      const index = _.findIndex(currentProducts, (product) => {
        return product.id === action.product.id
      })

      let newProducts = []
      if (index === -1) {
        const product = {
          ...action.product
        }
        
        product.inStock = product.quantity
        product.quantity = 1

        newProducts = [...currentProducts, product]
      } else {
        newProducts = currentProducts.slice()

        newProducts[index].quantity = newProducts[index].quantity + 1
      }

      updateCartInLocalStorage({products: newProducts})

      return state.set("products", newProducts)
    case actions.REMOVE_PRODUCT:
      const cProducts = state.get("products")

      const nProducts = []
      for (let i=0; i<cProducts.length; i++) {
        if (cProducts[i].id !== action.product.id) {
          nProducts.push(cProducts[i])
        } 
      }

      updateCartInLocalStorage({products: nProducts})

      return state.set("products", nProducts)
    case actions.PAY:
      return state.set("products", [])
    case actions.INCREASE_PRODUCT_QUANTITY:
      const productsToIncrease = state.get("products")

      const iIndex = _.findIndex(productsToIncrease, (product) => {
        return product.id === action.product.id
      })

      const newProductsToIncrease = productsToIncrease.slice()
      
      newProductsToIncrease[iIndex].quantity = newProductsToIncrease[iIndex].quantity + 1

      if (newProductsToIncrease[iIndex].quantity > newProductsToIncrease[iIndex].inStock) {
        newProductsToIncrease[iIndex].quantity = newProductsToIncrease[iIndex].inStock
      }

      updateCartInLocalStorage({products: newProductsToIncrease})

      return state.set("products", newProductsToIncrease)
    case actions.DECREASE_PRODUCT_QUANTITY:
      const productsToDecrease = state.get("products")

      const dIndex = _.findIndex(productsToDecrease, (product) => {
        return product.id === action.product.id
      })

      const newProductsToDecrease = productsToDecrease.slice()
      
      newProductsToDecrease[dIndex].quantity = newProductsToDecrease[dIndex].quantity - 1

      if (newProductsToDecrease[dIndex].quantity < 0) {
        newProductsToDecrease[dIndex].quantity = 0
      }

      updateCartInLocalStorage({products: newProductsToDecrease})

      return state.set("products", newProductsToDecrease)
    case actions.LOAD_CART_FROM_LOCAL_STORAGE:
      return state.set("products", getCartFromLocalStorage())
    default:
      return state
  }
}