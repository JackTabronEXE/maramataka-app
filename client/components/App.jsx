import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Clock from './Clock'
import Footer from './Footer'
import Header from './Header'
import Moon from './Moon'
import Calendar from './Calendar'

function Home() {
  return (
    <>
      <Header />
      <Calendar />
      <Moon />
      <Clock />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
export default App
