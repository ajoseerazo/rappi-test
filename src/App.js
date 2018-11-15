import React, { Component } from 'react';
import Header from './containers/header';
import ProductsList from './containers/productsList';
import LeftNavigation from './containers/leftNavigation';
import Cart from './containers/cart'
import { Row, Col } from 'reactstrap';
import './App.scss';
import { Provider } from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  state = {
    isCartOpened: false
  }

  toggleCart = () => {
    this.setState({
      isCartOpened: !this.state.isCartOpened
    })
  }

  render () {
    const { isCartOpened } = this.state

    return (
      <Provider store={store}>
        <div className="App">
          <Header onClickCartButton={this.toggleCart} />

          <Row className="App-container">
            <Col sm="3" className="left-navigation-container">
              <LeftNavigation />
            </Col>

            <Col sm={{size: 9, offset: 3}} className="main-container">
              <ProductsList />
            </Col>
          </Row>

          <Cart isOpened={isCartOpened} onClickClose={this.toggleCart} />
        </div>
      </Provider>
    );
  }
}
