import React from 'react'
import  "./app.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar} from '../index'

const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
        <Route/>
        <Route/>
        <Route/>
        <Route/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App