import { getDates, formatDay } from '../apis/apiClient'

export const SET_DATES = 'SET_DATES'
export const SET_DAY = 'SET_DAY'

export function setDates(dates) {
  return {
    type: SET_DATES,
    payload: dates,
  }
}

export function setDay(day) {
  return {
    type: SET_DAY,
    payload: day,
  }
}

export function fetchDates() {
  return (dispatch) => {
    return getDates().then((dates) => {
      dispatch(setDates(dates))
      return null
    })
  }
}

export function getDay() {
  return (dispatch) => {
    return formatDay().then((day) => {
      dispatch(setDay(day))
      return null
    })
  }
}
