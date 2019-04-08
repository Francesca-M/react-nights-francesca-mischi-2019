export const ADD_PRODUCT = 'cartItems/ADD'
export const CLEAR_CART = 'cartItems/CLEAR'

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const clearCart = cartItems => ({
  type: CLEAR_CART,
  payload: cartItems,
})
