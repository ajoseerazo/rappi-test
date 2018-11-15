import React, { PureComponent } from 'react'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import _ from 'lodash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

library.add([faTimes, faCaretDown, faCaretUp])

export default class Cart extends PureComponent {
  render () {
    const { products, isOpened, onClickClose, onClickRemoveProduct, onClickPay, onClickMinus, onClickPlus } = this.props

    const total = _.reduce(products, (sum, product) => {
      return sum = sum + product.priceNumber*product.quantity
    }, 0)

    return (
      <div className={`cart ${isOpened ? 'open' : ''}`} onClick={(e) => {
        if (e.target.className === 'cart open') {
          onClickClose()
        }
      }}>
        <div className="cart-container">
          <div className="cart-header">
            <h3>Carrito de compra</h3>
            <div onClick={onClickClose}><FontAwesomeIcon icon="times" /></div>
          </div>

          <ul className="cart-products">
          {
            products.map(product => (
              <li className="cart-product" key={product.id}>
                <Row>
                  <Col sm="2" xs="2" className="cart-product-quantity text-center">
                    <FontAwesomeIcon icon="caret-up" onClick={() => onClickPlus(product)} />
                    <div className="quantity">{product.quantity}</div>
                    <FontAwesomeIcon icon="caret-down" onClick={() => onClickMinus(product)} />
                  </Col>
                  <Col sm="6" xs="6" className="cart-product-name">
                    {product.name}
                  </Col>
                  <Col sm="2" xs="2" className="cart-product-price text-right">
                    {product.price}
                  </Col>
                  <Col sm="2" xs="2" className="cart-product-remove text-right" onClick={() => onClickRemoveProduct(product)} >
                    <FontAwesomeIcon icon="times" />
                  </Col>
                </Row>
              </li>
            ))
          }  
          </ul>   

          <div className="cart-footer">
            <div className="cart-total"><span className="total-text">Total: </span><span className="total-price">${total.toLocaleString("en-US")}</span></div>
            <Button disabled={!total} onClick={() => {
              alert("Compra realizada exitosamente!")
              onClickPay()
            }}>Pagar</Button>
          </div>
        </div>
      </div>
    )
  }
}