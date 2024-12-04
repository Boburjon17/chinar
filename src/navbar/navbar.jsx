import React from 'react'
import "./navbar.scss"
import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <nav className='nav-container'>
        <div className="navbar">
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
        <hr />
        
        
     </nav>
  )
}

export default Navbar