import React, { Component } from 'react'
import {
  Row,
  Col,
  Button
} from 'reactstrap'
import _ from 'lodash'
import './style.scss'

export default class Cart extends Component {
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
            <div onClick={onClickClose}>X</div>
          </div>

          <ul className="cart-products">
          {
            products.map(product => (
              <li className="cart-product" key={product.id}>
                <Row>
                  <Col sm="2" className="cart-product-quantity text-center">
                    <Button size="sm" onClick={() => onClickPlus(product)}>+</Button>
                    <div>{product.quantity}</div>
                    <Button size="sm" onClick={() => onClickMinus(product)}>-</Button>
                  </Col>
                  <Col sm="6" className="cart-product-name">
                    {product.name}
                  </Col>
                  <Col sm="2" className="cart-product-price text-right">
                    {product.price}
                  </Col>
                  <Col sm="2" className="cart-product-remove text-right" onClick={() => onClickRemoveProduct(product)} >
                    x
                  </Col>
                </Row>
              </li>
            ))
          }  
          </ul>   

          <div className="cart-footer">
            <div className="cart-total">Total: ${total.toLocaleString("en-US")}</div>
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