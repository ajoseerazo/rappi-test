import React, { Component } from 'react'
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  Button } from 'reactstrap';
import './style.scss'

export default class Product extends Component {
  onClickOnAddToCart = () => {
    const { onAddToCart, product } = this.props

    onAddToCart(product)
  }

  render () {
    const { product } = this.props;

    return (
      <div className="product-detail">
        <Card>
          <CardBody>
            <CardTitle className="product-title">{product.name}</CardTitle>
            <CardText className="text-right product-quantity">Cantidad: {product.quantity}</CardText>
            <CardText className="text-right product-price">{product.price}</CardText>
            <CardText className={`text-right product-availability ${product.available ? 'available' : 'not-available'}`}>{product.available ? 'Disponible' : 'No disponible'}</CardText>
            <Button disabled={!product.available} onClick={this.onClickOnAddToCart} size="sm" >Agregar al carrito</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}