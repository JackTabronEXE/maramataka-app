import { getDates } from '../apis/apiClient'

export const SET_DATES = 'SET_DATES'

export function setDates(dates) {
  return {
    type: SET_DATES,
    payload: dates,
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
