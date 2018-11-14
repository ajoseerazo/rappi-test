const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  PAY: 'PAY',
  INCREASE_PRODUCT_QUANTITY: 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY: 'DECREASE_PRODUCT_QUANTITY',
  LOAD_CART_FROM_LOCAL_STORAGE: 'LOAD_CARD_FROM_LOCAL_STORAGE',
  addToCart: (product) => {
    return {
      type: cartActions.ADD_TO_CART,
      product
    }
  },
  removeProduct: (product) => {
    return {
      type: cartActions.REMOVE_PRODUCT,
      product
    }
  },
  pay: () => {
    return {
      type: cartActions.PAY
    }
  },
  increaseProductQuantity: (product) => {
    return {
      type: cartActions.INCREASE_PRODUCT_QUANTITY,
      product
    }
  },
  decreaseProductQuantity: (product) => {
    return {
      type: cartActions.DECREASE_PRODUCT_QUANTITY,
      product
    }
  },
  loadCart: () => {
    return {
      type: cartActions.LOAD_CART_FROM_LOCAL_STORAGE
    }
  }
}

export default cartActions