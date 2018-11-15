import React, { PureComponent } from 'react'
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
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

library.add(faShoppingBasket, faBars)

export default class Header extends PureComponent {
  render () {
    const { onClickCartButton, productsCount, onClickMenu } = this.props

    return (
      <Navbar color="white" light expand="md" fixed="top">
        <FontAwesomeIcon size="lg" icon="bars" style={{marginRight: 15, cursor: 'pointer'}} onClick={onClickMenu}/>

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

Header.propTypes = {
  onClickCartButton: PropTypes.func,
  productsCount: PropTypes.number,
  onClickMenu: PropTypes.func
}