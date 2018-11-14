import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ProductsList from '../../components/productsList';

class ProductsListContainer extends Component {
  render () {
    return (
      <ProductsList {...this.props} />
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
  return { actions: bindActionCreators({}, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListContainer)