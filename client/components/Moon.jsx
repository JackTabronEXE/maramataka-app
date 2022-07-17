import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'
import { format } from 'date-fns'
import toDate from 'date-fns/toDate'

function Moon() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()

  const date = format(toDate(Date.now()), 'd MMMM y')
  const today = datesList.find((day) => {
    return day.DMY == date
  })
  console.log(today ? today.name : 'not yet')

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  if (today == null) {
    return <h1>Loading</h1>
  }
  return (
    <>
      <section>
        <div className="content">
          <h2>{today.name}</h2>
          <h2>{today.name}</h2>
        </div>
      </section>
      <div className="moon-text">
        <h1> ENERGY : {today.energy} </h1>
        <p>{today.goodFor}</p>
      </div>
    </>
  )
}

export default Moon
