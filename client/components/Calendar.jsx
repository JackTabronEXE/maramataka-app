import React from 'react'
import { format } from 'date-fns'
import toDate from 'date-fns/toDate'

export function Calendar() {
  const date = format(toDate(Date.now()), 'yyyy-MM-dd')
  return (
    <>
      <label htmlFor="chooseDate">Choose date:</label>

      <input
        type="date"
        id="chooseDate"
        name="choose-date"
        value={date}
        min="2022-07-14"
        max="2022-12-10"
      ></input>
    </>
  )
}

export default Calendar
