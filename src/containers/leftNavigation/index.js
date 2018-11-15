import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LeftNavigation from '../../components/leftNavigation'
import app from '../../redux/actions/app'

const {
  selectItem,
  searchInSublevel,
  closeFilters
} = app

class LeftNavigationContainer extends Component {
  render () {
    const { 
      categories, 
      isFiltersOpened,
      actions: { selectItem, searchInSublevel, closeFilters } } = this.props

    return (
      <div className={`left-navigation-container ${isFiltersOpened ? 'open' : '' }`}>
        <LeftNavigation items={categories} onSelectItem={selectItem} onSearch={searchInSublevel} onClickCloseFilters={closeFilters} isOpened={isFiltersOpened} />  
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories, isFiltersOpened } = state.App.toJS() 

  return {
    categories,
    isFiltersOpened
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ selectItem, searchInSublevel, closeFilters }, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftNavigationContainer)