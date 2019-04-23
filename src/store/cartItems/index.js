import { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      }
    case CLEAR_CART:
      state = []
      return state
    case REMOVE_PRODUCT: {
      const nextState = Object.assign({}, state)
      delete nextState[action.payload]
      return nextState
    }
    default:
      return state
  }
}

export default reducer
