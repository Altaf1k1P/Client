import { useState } from 'react'
import Header from './componnets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componnets/Footer'

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
