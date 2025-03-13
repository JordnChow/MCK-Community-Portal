import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from "./modules/NavBar/navbar"
import {Large, Normal} from "./modules/News-Containers/containers"
import SideBar from './modules/sidebarthing/sidebar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
