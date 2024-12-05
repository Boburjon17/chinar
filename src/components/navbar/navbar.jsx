import React from 'react'
import "./navbar.scss"
import logo from "../../assets/images/logo.png"
import {  Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className="navbar">
            <div className="navbar-top">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Производство плетенной мебели премиун класса в Ташкенте</p>
            </div>
            <div className="nav-networking">
                <div className="nav-connect">
                <p>Задайте вопрос, мы онлайн</p>
                <ul className='nav-icons'>
                    <li><i className="fa-brands fa-whatsapp"></i></li>
                    <li><i className="fa-brands fa-telegram"></i></li>
                </ul>

                </div>
                <div className="nav-contact">
                    <p>Звоните: 10:00 - 20:00</p>
                    <h3>+998 71 500 00 00</h3>
                </div>

               
            </div>

            </div>
          
            <div className="navbar-bottom">
            <hr />
             <ul>
                <li><Link  to={'/'}  >Главная</Link></li>
                <li><Link to={'/kаталог'} >Каталог</Link></li>
                <li><Link to={'/гарантии'} >Гарантии</Link></li>
                <li><Link to={'/продукты'} >Продукты</Link></li>
                <li><Link to={'/компании'} >О компании</Link></li>
                <li><Link to={'/доставка'} >Доставка</Link></li>
                <li><Link to={'/производство'} >Производство</Link></li>
                <li><Link to={'/контакты'} >Контакты</Link></li>
               
               
             </ul>

            </div>
           
        </div>
       
        
        
     </nav>
  )
}

export default Navbar