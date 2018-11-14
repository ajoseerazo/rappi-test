import React, { Component } from 'react'
import { 
  Card, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';

export default class Product extends Component {
  onClickOnAddToCart = () => {
    const { onAddToCart, product } = this.props

    onAddToCart(product)
  }

  render () {
    const { product } = this.props;

    return (
      <div>
        <Card style={{margin: 10}}>
          <CardBody>
            <CardTitle>{product.name}</CardTitle>
            <CardSubtitle className="text-right">Cantidad: {product.quantity}</CardSubtitle>
            <CardText className="text-right">Precio: {product.price}</CardText>
            <CardText className="text-right">{product.available ? 'Disponible' : 'No disponible'}</CardText>
            <Button disabled={!product.available} onClick={this.onClickOnAddToCart} >Agregar al carrito</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}