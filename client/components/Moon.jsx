/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'
import { format, addDays } from 'date-fns'
import toDate from 'date-fns/toDate'

function Moon() {
  const datesList = useSelector((state) => state.dates)
  const inputDay = useSelector((state) => state.day)
  // whenever state changes, update 'date' or 'find today == inputDay'

  const dispatch = useDispatch()
  const [targetDate, setTargetDate] = useState(toDate(Date.now()))
  const date = format(targetDate, 'd MMMM y')
  const today = datesList.find((day) => {
    return day.DMY == inputDay
  })

  console.log('Calendar effect', inputDay, 'today:', today)
  console.log(datesList)
  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  return (
    <>
      <section>
        <div className="content">
          <h2>{today?.name}</h2>
          <h2>{today?.name}</h2>
        </div>
        <div className="date-text">
          <h2> {today?.DMY.toUpperCase()} </h2>
        </div>
      </section>
      <div className="moon-text">
        <h1> ENERGY: {today?.energy.toUpperCase()} </h1>
        <p> {today?.goodFor} </p>
        <img
          className="moon-image"
          src={`/images/moonphases/${today?.image}`}
          alt="dummy"
        />
      </div>
      <a
        className="arrow"
        onClick={() => {
          setTargetDate(addDays(targetDate, 1))
        }}
      >
        <div className="arrow">
          <div className="arrow-top"></div>
          <div className="arrow-bottom"></div>
        </div>
      </a>
      <a
        className="flipper"
        onClick={() => {
          setTargetDate(addDays(targetDate, -1))
        }}
      >
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
