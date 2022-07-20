import React, { useState } from 'react'
import { format } from 'date-fns'
import { useSearchParams } from 'react-router-dom'
import styles from './Calendar.module.scss'

export default function Calendar() {
  const [searchParams, setSearchParams] = useSearchParams()

  const today = new Date().toISOString()

  const dateString = searchParams.get('date') || today
  const isoDate = new Date(dateString).toISOString().split('T')[0]

  const [chosenDate, setChosenDate] = useState(isoDate)
  function handleChange(e) {
    e.preventDefault()
    setChosenDate(e.target.value)
  }

  function changeMoon(e) {
    e.preventDefault()
    const date = format(new Date(chosenDate), 'd MMMM y')
    setSearchParams({ date })
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
        value={chosenDate}
        name="select-date"
        min="2022-07-14"
        max="2022-12-10"
        onChange={(e) => handleChange(e)}
      />
      <button className={styles.datebutton} onClick={(e) => changeMoon(e)}>
        Go
      </button>
    </form>
  )
}
