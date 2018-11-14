import { createStore, combineReducers } from 'redux'
import App from './reducers/app'

const store = createStore(
  combineReducers({
    App
  }),
)

export default store