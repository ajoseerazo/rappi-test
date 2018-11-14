import React, { Component } from 'react'
import { 
  Col,
  Row } from 'reactstrap';
import Product from '../product';
import './style.scss';

export default class ProductsList extends Component {
  render () {
    const { products, itemSelected, breadcrumb } = this.props;

    return (
      <div className="products-list-container">
        <Row>
          <Col sm="12">
          {
            breadcrumb ?
            <h1 className="text-center">{breadcrumb.join(" > ")}</h1>
            :
            null
          }
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 4, offset: 8 }}> 
            <h4 className="text-right">{products.length} {`resultado${products.length !== 1 ? 's' : ''}`}</h4>
          </Col>
        </Row>
        <Row className="products-list">
        {
          products.map(product => {
            return <Product key={product.id} product={product} />
          })
        }
      </Row>
      </div>
    );
  }
}