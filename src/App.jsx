import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from "./modules/NavBar/navbar"
import Footer from './modules/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
