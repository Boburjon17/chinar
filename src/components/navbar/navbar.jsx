import React from 'react'
import "./navbar.scss"
import logo from "../../assets/images/logo.png"
import {  Link } from 'react-router-dom'

const Navbar = ({homeRef,catologRef,garantiRef,produceRef,companiRef,deliveryRef, productionRef, contactRef}) => {
  
 
    const scrollToSection = (sectionRef) => {
      
          sectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        
      };
      
  
    return (
    <nav className='nav-container'>
        <div className="navbar">
            <div className="navbar-top">
            <div href="#" className="nav-logo">
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
                <li><a href='#Главная'     onClick={()=>scrollToSection(homeRef)}>Главная</a></li>
                <li><a href='#Катало'     onClick={()=>scrollToSection(catologRef)}>Каталог</a></li>
                <li><a href='#Гарантии'    onClick={()=>scrollToSection(garantiRef)}>Гарантии</a></li>
                <li><a href='#Продукты'    onClick={()=>scrollToSection(produceRef)}>Продукты</a></li>
                <li><a href='#О компании'  onClick={()=>scrollToSection(companiRef)}>О компании</a></li>
                <li><a href='#Доставка'    onClick={()=>scrollToSection(deliveryRef)}>Доставка</a></li>
                <li><a href='#Производство'onClick={()=>scrollToSection(productionRef)}>Производство</a></li>
                <li><a href='#Контакты'    onClick={()=>scrollToSection(contactRef)}>Контакты</a></li>
               
               
             </ul>

            </div>
           
        </div>
       
        
        
     </nav>
  )
}

export default Navbar