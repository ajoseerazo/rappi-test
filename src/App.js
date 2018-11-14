import React, { Component } from 'react';
import Header from './components/header';
import ProductsList from './containers/productsList';
import LeftNavigation from './containers/leftNavigation';
import { Row, Col } from 'reactstrap';
import './App.scss';
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Row>
            <Col sm="3">
              <LeftNavigation />
            </Col>

            <Col sm="9">
              <ProductsList />
            </Col>
          </Row>
        </div>
      </Provider>
    );
  }
}
