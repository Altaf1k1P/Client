import { useState } from 'react'
import Header from './componnets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componnets/Footer'
import "./App.css"

function App() {

  return (
    <>
     <Header/>
     <main>
        <Outlet />
      </main>     
      <Footer/>
    </>
  )
}

export default App
