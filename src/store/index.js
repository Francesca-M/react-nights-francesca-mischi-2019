import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import productDetails from './productDetails'
import customer from './customer/reducer'

const reducer = combineReducers({
  products,
  cartItems,
  productDetails,
  customer,
})

export const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    // this variable will be set if you have redux-dev-tools extension installed in your browser
    // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
