import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand } from 'reactstrap';

export default class Header extends Component {
  render () {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">e-commerce</NavbarBrand>
        </Navbar>
      </div>
    )
  }
}