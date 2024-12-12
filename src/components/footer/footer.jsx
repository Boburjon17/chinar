import React from 'react'
import "./footer.scss"
import footerLogo from "../../assets/images/logo.png"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div id='Контакты' className="footer">
            <div className="footer-questions">
                <h1>Остались вопросы? </h1>
                <a href="#"><button>ЗАДАТЬ ВОПРОС</button></a>

            </div>
           
                  <div  className="navbar-top">
            <div className="nav-logo">
                <img src={footerLogo} alt="" />
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
        </div>
    </div>
  )
}

export default Footer