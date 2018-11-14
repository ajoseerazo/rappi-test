import React, { Component } from 'react'
import Filters from '../../components/filters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions/app'

const {
  filterProducts,
  clearFilters
} = actions

class FiltersContainer extends Component {
  render () {
    const { 
      actions: { filterProducts, clearFilters },
      stockRange,
      priceRange,
      filters } = this.props 

    return (
      <Filters filters={filters} onFilterChanged={filterProducts} stockRange={stockRange} priceRange={priceRange} onClearFilters={clearFilters} />
    )
  }
}

function mapStateToProps(state) {
  const { filters, stockRange, priceRange } = state.App.toJS() 

  return { 
    filters,
    stockRange,
    priceRange
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ filterProducts, clearFilters }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)