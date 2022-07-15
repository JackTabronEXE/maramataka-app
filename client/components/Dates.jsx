import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'
import { format } from 'date-fns'
import toDate from 'date-fns/toDate'

function Dates() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()

  // ^ If thunk works, const today = useSelector((state) => state.day)

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
    today && (
      <>
        <h1>{today.name}</h1>
        <img src={`/images/moonphases/${today.image}`} alt="The moon today" />
      </>
    )
  )
}

export default Dates
