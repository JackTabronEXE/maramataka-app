import { SET_DAY } from '../actions'
import { format } from 'date-fns'

const initialState = format(Date.now(), 'd MMMM y')

export default function dayReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_DAY:
      return payload
    default:
      return state
  }
}
