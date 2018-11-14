import { createStore, combineReducers } from 'redux'
import App from './reducers/app'
import Cart from './reducers/cart'

const store = createStore(
  combineReducers({
    App,
    Cart
  }),
)

export default store