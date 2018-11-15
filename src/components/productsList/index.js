import React, { PureComponent } from 'react'
import { 
  Col,
  Row } from 'reactstrap';
import Product from '../product';
import Sort from '../../containers/sort'
import './style.scss';

export default class ProductsList extends PureComponent {
  render () {
    const { products, breadcrumb, onAddToCart } = this.props;

    return (
      <div className="products-list-container">
        <Row>
          <Col sm="12">
          {
            breadcrumb ?
            <h3 className="title">{breadcrumb.join(" > ")}</h3>
            :
            null
          }
          </Col>
        </Row>

        <Row>
          <Col sm="8">
            <Sort />
          </Col>
          <Col sm="4"> 
            <h6 className="text-right">{products.length} {`resultado${products.length !== 1 ? 's' : ''}`}</h6>
          </Col>
        </Row>
        <Row className="products-list">
        {
          products.map(product => {
            return <Product key={product.id} product={product} onAddToCart={onAddToCart} />
          })
        }
      </Row>
      </div>
    );
  }
}