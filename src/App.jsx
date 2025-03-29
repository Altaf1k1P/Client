import { useState } from 'react'
import Header from './componnets/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componnets/Footer'
import "./App.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Test from './componnets/test'

function App() {

  return (
    <>
     <Header/>
     <main>
        <Outlet />
      </main>     
      <Footer/>
      {/* <Test/> */}
    </>
  )
}

export default App
