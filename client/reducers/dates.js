import { SET_DATES } from '../actions'

const initialState = []

function datesReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_DATES:
      return payload
    default:
      return state
  }
}

export default datesReducer
