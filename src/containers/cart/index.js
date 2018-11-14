import React, { Component } from 'react'
import Cart from '../../components/cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cartActions from '../../redux/actions/cart'

const {
  removeProduct,
  pay,
  increaseProductQuantity,
  decreaseProductQuantity,
  loadCart
} = cartActions

class CartContainer extends Component {
  componentDidMount() {
    const { actions: { loadCart } } = this.props

    loadCart()
  }

  render () {
    const { 
      actions: { removeProduct, pay, increaseProductQuantity, decreaseProductQuantity },
      products, 
      isOpened, 
      onClickClose } = this.props

    return <Cart products={products} isOpened={isOpened} onClickClose={onClickClose} onClickRemoveProduct={removeProduct} onClickPay={pay} onClickPlus={increaseProductQuantity} onClickMinus={decreaseProductQuantity} />;
  }
}

function mapStateToProps(state) {
  const { products } = state.Cart.toJS()

  return {
    products
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ removeProduct, pay, increaseProductQuantity, decreaseProductQuantity, loadCart }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer)