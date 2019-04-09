import { ADD_PRODUCT } from './actions'
import { CLEAR_CART } from './actions'

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
    default:
      return state
  }
}

export default reducer
