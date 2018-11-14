import React, { Component } from 'react'
import Filters from '../../components/filters'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions/app'

const {
  filterProducts
} = actions

class FiltersContainer extends Component {
  render () {
    const { actions: { filterProducts } } = this.props 

    console.log(this.props)
    return (
      <Filters onFilterChanged={filterProducts} />
    )
  }
}

function mapStateToProps(state) {
  const { filters } = state.App.toJS() 

  return { 
    filters
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ filterProducts }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)