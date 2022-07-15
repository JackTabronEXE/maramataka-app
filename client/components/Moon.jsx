import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'
import { format } from 'date-fns'
import toDate from 'date-fns/toDate'

function Moon() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()

  const day = format(toDate(Date.now()), 'd MMMM y')
  const today = datesList.find((date) => {
    console.log(date.DMY, day)
    return date.DMY == day
  })
  console.log('Our find is returning ', today)
  console.log(today ? today.name : 'not yet')

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  return (
    <>
      <section>
        <div className="content">
          <h2>Rakaunui</h2>
          <h2>Rakaunui</h2>
        </div>
      </section>
      <div className="moon-text">
        <h1> ENERGY : HIGH </h1>
        <p>
          Very productive day physically and mentally / good time to acheive
          short term goals / good time to engage in physical communal activities
          / conduct ceremonies celebrating the new lunar cycle
        </p>
      </div>
    </>
  )
}

export default Moon
