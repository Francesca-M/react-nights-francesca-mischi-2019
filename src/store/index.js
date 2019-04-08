import { createStore, combineReducers } from 'redux'

import products from './products'
import cartItems from './cartItems'
import productDetails from './productDetails'

const reducer = combineReducers({
  products,
  cartItems,
  productDetails,
})

const store = createStore(reducer)

export default store
