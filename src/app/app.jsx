import React from 'react'
import  "./app.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Главная  from '../pages/Главная'
import Гарантии  from '../pages/Гарантии'
import Каталог  from '../pages/Каталог'
import Продукты  from '../pages/Продукты'
import Компании  from '../pages/Компании'
import Доставка  from '../pages/Доставка'
import Производство from '../pages/Производство'
import Контакты  from '../pages/Контакты'


const App = () => {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
        <Route  index  element={<Главная/>} />
        <Route path='/каталог' element={<Каталог/>}/>
        <Route path='/гарант' element={<Гарантии/>}/>
        <Route path='/продукты' element={<Продукты/>}/>
        <Route path='/компании' element={<Компании/>}/>
        <Route path='/доставка' element={<Доставка/>}/>
        <Route path='/производство' element={<Производство/>}/>
        <Route path='/контакты' element={<Контакты/>}/>
       
        <Route/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App