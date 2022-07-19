import { combineReducers } from 'redux'

import datesReducer from './dates'
import dayReducer from './day'

export default combineReducers({
  dates: datesReducer,
  day: dayReducer,
})
