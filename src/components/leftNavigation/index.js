import React, { Component } from 'react'
import { Input } from 'reactstrap';
import { SideNav, Nav } from 'react-sidenav'
import Filters from '../filters'
import './style.scss';

export default class LeftNavigation extends Component {
  renderItem = (item) => {
    const { onSelectItem } = this.props

    return (
      <Nav key={item.id} id={item.id + item.name} onClick={() => {
        onSelectItem(item)}}>
        <div>{item.name}</div>
        {
          item.sublevels ?
          this.renderItems(item.sublevels)
          :
          <Nav>
            <Input placeholder="Buscar en esta categoría"/>
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
    const { items } = this.props

    return (
      <div className="left-navigation">
        <SideNav defaultSelectedPath="1">
          {this.renderItems(items)}
        </SideNav>

        <Filters />
      </div>
    );
  }
}