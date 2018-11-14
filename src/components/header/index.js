import React, { Component } from 'react'
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  Button } from 'reactstrap';

export default class Header extends Component {
  render () {
    const { onClickCartButton, productsCount } = this.props

    return (
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">e-commerce</NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button onClick={onClickCartButton}>Carrito ({productsCount})</Button>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}