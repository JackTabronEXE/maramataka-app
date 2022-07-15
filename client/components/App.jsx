import React from 'react'
import Dates from './Dates'
import Clock from './Clock'
import Footer from './Footer'
import Header from './Header'
import Moon from './Moon'
import Navigator from './Navigator'
import MoonImage from './MoonImage'


function App() {
  return (
    <>
      <Header/>
      <Moon />
      <Clock/>
      <Navigator />
    </>
  )
}

export default App
