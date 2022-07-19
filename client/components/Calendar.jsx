import React, { useState } from 'react'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { setDay } from '../actions'
import styles from './Calendar.module.scss'

export default function Calendar() {
  const dispatch = useDispatch()
  const [targetDate, setTargetDate] = useState(
    new Date().toISOString().split('T')[0]
  )

  function handleChange(e) {
    e.preventDefault()
    setTargetDate(e.target.value)
  }

  function changeMoon(e) {
    e.preventDefault()
    const date = format(new Date(targetDate), 'd MMMM y')
    dispatch(setDay(date))
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
        defaultValue={targetDate}
        name="select-date"
        min="2022-07-14"
        max="2022-12-10"
        // onFocus={() => {
        //   console.log('Focus!')
        // }}
        onChange={(e) => handleChange(e)}
      />
      <button className={styles.datebutton} onClick={(e) => changeMoon(e)}>
        Go
      </button>
    </form>
  )
}

// export default Calendar
