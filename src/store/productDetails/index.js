import { LOAD_DETAILS } from './actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DETAILS:
      return action.payload
    default:
      return state
  }
}

export default reducer
