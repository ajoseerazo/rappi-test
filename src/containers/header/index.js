import React, { Component } from 'react'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

class HeaderContainer extends Component {
  render () {
    const { onClickCartButton, productsCount }  = this.props

    return <Header onClickCartButton={onClickCartButton} productsCount={productsCount} />
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
  return { actions: bindActionCreators({}, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
