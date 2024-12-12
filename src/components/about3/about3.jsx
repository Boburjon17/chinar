import React from 'react'
import "./about3.scss"
import about3Img1 from "../../assets/images/about3-img1.png"
import about3Img2 from "../../assets/images/about3-img2.png"
import about3Img3 from "../../assets/images/about3-img3.png"
import headerBtn from "../../assets/images/header-btn.png"

const About3 = () => {
  return (
    <div className='about3-container'>
        <div className="about3">
        <h1>Новая летняя коллекция от Chinar для вашего дома и заведения</h1>

   <div className="about-finished">
    <img src={about3Img1} alt="" />
    <div className="about-finished-img">
    <div className="about-finished-left">
        <img src={about3Img2} alt="" />
    </div>

    <div className="about-finished-right">
        <img src={about3Img3} alt="" />
    </div>
  </div>

    </div>

    <div className="about-form">
        <div className="about-form-text">
            <h2>200+ проектов в фото каталоге</h2>
            <p>Скачайте прямо сейчас</p>
            <form >
                <input type="text" placeholder='Ваше имя' />
                <input type="text"defaultValue={"+998"} maxLength={14} />
              <a href="#"><button>СКАЧАТЬ КАТАЛОГ</button></a>
            </form>
        </div>
        <div className="about-form-img">
            <img src={headerBtn} alt="" />
        </div>
    </div>
        </div>
    </div>
  )
}

export default About3