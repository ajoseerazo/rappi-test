import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LeftNavigation from '../../components/leftNavigation'
import app from '../../redux/actions/app'

const {
  selectItem
} = app

class LeftNavigationContainer extends Component {
  render () {
    const { categories, actions: { selectItem } } = this.props

    return (
      <LeftNavigation items={categories} onSelectItem={selectItem} />  
    )
  }
}

function mapStateToProps(state) {
  const { categories } = state.App.toJS() 

  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({selectItem}, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavigationContainer)