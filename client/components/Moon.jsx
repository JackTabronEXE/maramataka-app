import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDates } from '../actions'

function Moon() {
  const datesList = useSelector((state) => state.dates)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDates())
  }, [])

  // return <img src={`/images/moonphases/${datesList[0]?.image}`} alt="dummy" />
  return(
    <> 
 <section>
  <div className="content">
    <h2>{datesList[0]?.name}</h2>
    <h2>{datesList[0]?.name}</h2>
  </div>
</section>
    <div className="moon-text">
    <h1> ENERGY: {datesList[0]?.energy.toUpperCase()} </h1>
    <p> {datesList[0]?.goodFor} </p> 
    <img src={`/images/moonphases/${datesList[0]?.image}`} alt="dummy" />
    </div>
    </>
  )
}

export default Moon