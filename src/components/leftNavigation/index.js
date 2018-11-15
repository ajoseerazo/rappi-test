import React, { PureComponent } from 'react'
import { Input, Button } from 'reactstrap';
import { SideNav, Nav } from 'react-sidenav'
import Filters from '../../containers/filters'
import PropTypes from 'prop-types'
import './style.scss';

export default class LeftNavigation extends PureComponent {
  renderItem = (item) => {
    const { onSelectItem, onSearch } = this.props

    return (
      <Nav key={item.id} id={item.id + item.name} onClick={() => {
        onSelectItem(item)}}>
        <div className="nav-item">{item.name}</div>
        {
          item.sublevels ?
          this.renderItems(item.sublevels)
          :
          <Nav>
            <Input bsSize="sm" placeholder="Buscar en esta categoría" onChange={(e) => {
              onSearch(e.target.value, item)
            }}/>
          </Nav>
        }
      </Nav>
    )
  }

  renderItems = (items) => {
    return (items || []).map(item => {
      return this.renderItem(item);
    })
  }

  render () {
    const { items, onClickCloseFilters } = this.props

    return (
      <div className="left-navigation">
        <div className="categories">
          <h5>Categorías</h5>
          <SideNav defaultSelectedPath="1">
            {this.renderItems(items)}
          </SideNav>
        </div>

        <Filters />

        <Button className="filter-btn" size="lg" onClick={onClickCloseFilters}>Filtrar</Button>
      </div>
    );
  }
}

LeftNavigation.propTypes = {
  items: PropTypes.array,
  onClickCloseFilters: PropTypes.func,
  onSelectItem: PropTypes.func,
  onSearch: PropTypes.func
}