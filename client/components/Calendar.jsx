import React from 'react'
import { format } from 'date-fns'
import toDate from 'date-fns/toDate'
import styles from './Calendar.module.scss'

export default function Calendar() {
  const date = format(toDate(Date.now()), 'yyyy-MM-dd')

  function handleChange(e) {
    return e.preventDefault
  }

  return (
    <form className={styles.form}>
      <label htmlFor="selectDate" className={styles.label}>
        Select date:{' '}
      </label>
      <input
        className={styles.dateinput}
        type="date"
        id="selectDate"
        value={date}
        name="select-date"
        min="2022-07-14"
        max="2022-12-10"
        onChange={(e) => handleChange(e)}
      />
    </form>
  )
}

// export default Calendar
