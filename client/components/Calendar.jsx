import React, { useState } from 'react'
// import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import styles from './Calendar.module.scss'

export default function Calendar() {
  const dispatch = useDispatch()
  const [targetDate, setTargetDate] = useState(
    new Date().toISOString().split('T')[0]
  )

  function handleChange(e) {
    e.preventDefault()
    // const now = e.target.value
    // const timestamp = now.toISOString()
    setTargetDate(e.target.value)
    console.log('Change react state to', e.target.value)
  }

  function changeMoon(e) {
    e.preventDefault()
    //dispatch(setDay())

    // I can't use format on the datepicker return date (yyyy-mm-dd)
    // I could convert the element into a string then return a substring for each part of the date and ship those?
    // const date = format(targetDate, 'd MMMM y')
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
