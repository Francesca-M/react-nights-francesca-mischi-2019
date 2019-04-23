export const ADD_PRODUCT = 'cartItems/ADD_PRODUCT'
export const CLEAR_CART = 'cartItems/CLEAR'
export const REMOVE_PRODUCT = 'cartItems/REMOVE_PRODUCT'

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId,
})

export const clearCart = cartItems => ({
  type: CLEAR_CART,
  payload: cartItems,
})

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  payload: productId,
})
