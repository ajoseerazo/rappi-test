import React, { Component } from 'react';
import Sort from '../../components/sort'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions/app'

const {
  sortProducts
} = actions

class SortContainer extends Component {
  render () {
    const { actions: { sortProducts } } = this.props

    return (
      <Sort onSelectOption={sortProducts} />
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ sortProducts }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortContainer)