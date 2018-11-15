import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import appActions from '../../redux/actions/app'

const {
  openFilters
} = appActions

class HeaderContainer extends Component {
  render () {
    const { 
      onClickCartButton, 
      productsCount,
      actions: { openFilters } }  = this.props

    return <Header onClickCartButton={onClickCartButton} productsCount={productsCount} onClickMenu={openFilters} />
  }
}

function mapStateToProps(state) {
  const { products } = state.Cart.toJS() 

  const productsCount = _.reduce(products, (sum, product) => {
    return sum = sum + product.quantity
  }, 0)

  return {
    productsCount
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ openFilters }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
