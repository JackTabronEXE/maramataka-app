import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'
import { format, addDays } from 'date-fns'
import toDate from 'date-fns/toDate'

function Moon() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()
  const [targetDate, setTargetDate] = useState(toDate(Date.now()))
  const date = format(targetDate, 'd MMMM y')
  const today = datesList.find((day) => {
    return day.DMY == date
  })

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  // return <img src={`/images/moonphases/${datesList[0]?.image}`} alt="dummy" />
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
    </>
  )
}

export default Moon
