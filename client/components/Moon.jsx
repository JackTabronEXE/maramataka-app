/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchDates } from '../actions'
import { format, addDays } from 'date-fns'
import toDate from 'date-fns/toDate'

function Moon() {
  const datesList = useSelector((state) => state.dates)

  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const today = format(new Date(Date.now()), 'd MMMM y')

  const dateString = searchParams.get('date') || today
  const targetDay = datesList.find((day) => {
    return day.DMY == dateString
  })

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  function handleClick(change) {
    const targetDate = toDate(new Date(targetDay.DMY))
    const newDate = addDays(targetDate, change)
    const newDay = format(newDate, 'd MMMM y')
    setSearchParams({ date: newDay })
  }

  return (
    <>
      <section>
        <div className="content">
          <h2>{targetDay?.name}</h2>
          <h2>{targetDay?.name}</h2>
        </div>
        <div className="date-text">
          <h2> {targetDay?.DMY.toUpperCase()} </h2>
        </div>
      </section>
      <div className="moon-text">
        <h1> ENERGY: {targetDay?.energy.toUpperCase()} </h1>
        <p> {targetDay?.goodFor} </p>
        <img
          className="moon-image"
          src={`/images/moonphases/${targetDay?.image}`}
          alt="dummy"
        />
      </div>
      <a className="arrow" onClick={() => handleClick(1)}>
        <div className="arrow">
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
      </a>
      <a className="flipper" onClick={() => handleClick(-1)}>
        <div className="flipper">
          <div className="arrow2">
            <div className="arrow2-top"></div>
            <div className="arrow2-bottom"></div>
          </div>
        </div>
      </a>
    </>
  )
}

export default Moon
