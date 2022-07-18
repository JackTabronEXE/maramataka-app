import React from 'react'
import Clock from './Clock'
import Footer from './Footer'
import Header from './Header'
import Moon from './Moon'
import Calendar from './Calendar'
import Navigator from './Navigator'
import MoonImage from './MoonImage'

function App() {
  return (
    <>
      <Header />
      <Calendar />
      <Moon />
      <Clock />
      {/* <Navigator /> */}
      <Footer />
    </>
  )
}

export default App
