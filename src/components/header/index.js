import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Button, 
  Badge } from 'reactstrap';
import './style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingBasket)

export default class Header extends Component {
  render () {
    const { onClickCartButton, productsCount } = this.props

    return (
      <Navbar color="white" light expand="md" fixed="top">
        <NavbarBrand href="/">e-commerce</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem onClick={onClickCartButton}>
            <Button color="link"><FontAwesomeIcon size="lg" icon="shopping-basket" /></Button>
            <Badge color="secondary">{productsCount}</Badge>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}