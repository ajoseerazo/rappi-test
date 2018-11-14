import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductsList from '../../components/productsList';
import cartActions from '../../redux/actions/cart'

const {
  addToCart
} = cartActions

class ProductsListContainer extends Component {
  render () {
    const { 
      actions: { addToCart },
      products,
      itemSelected,
      breadcrumb
    } = this.props
    return (
      <ProductsList products={products} itemSelected={itemSelected} breadcrumb={breadcrumb} onAddToCart={addToCart} />
    )
  }
}

function mapStateToProps(state) {
  const { products, itemSelected, breadcrumb, productsFiltered, filters } = state.App.toJS() 

  return {
    products: filters.length ? productsFiltered : products,
    itemSelected,
    breadcrumb
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ addToCart }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)