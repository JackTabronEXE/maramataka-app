import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'

function Dates() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  return <img src={`/images/moonphases/${datesList[0]?.image}`} alt="dummy" />
}

export default Dates
