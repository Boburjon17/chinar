import React from 'react'
import './header.scss'
import  headerBtn  from "../../assets/images/header-btn.png"
import headerImg1  from "../../assets/images/header-img1.png"
import headerImg2  from "../../assets/images/header-img2.jfif"
import headerImg3  from "../../assets/images/header-img3.png"
const Header = () => {
  return (
    <div className='h-container'>
        <div className="header">
            <div className="header-top">
            <div className="header-left">
            <div className="header-subtitle">
                <hr />
                <p>от производителя</p>
            </div>
            <h1> <span>Плетённая</span> мебель для вашего бизнеса</h1>
            <p>Представляем специальную коллекцию плетеной мебели для бизнеса –<span> от элегантных стульев и столов для кафе и ресторанов до уютных уголков для отдыха и лаунж-зон.</span>  </p>
            <div className="header-btn">
                <img src={headerBtn} alt="" />
                <a href="#"><button> <h2>СКАЧАТЬ КАТАЛОГ</h2> <p>более 200 видов мебели</p></button></a>
            </div>
        </div>
        <div className="header-right">
            <div className="header-img-left">
                <img src={headerImg1} alt="" />
            </div>
            <div className="header-img-right">
                <img src={headerImg2} alt="" />
                <img src={headerImg3} alt="" />
            </div>

        </div>

            </div>

            <div className="header-bottom">
                <ul>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <p>Гарантия от 3 лет на всю продукцию</p>
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <p>Доставка от 30.000 сум до двери</p>
                        </label>
                    </li>

                    <li>
                        <label htmlFor="">
                            <input type="checkbox" />
                            <p>Оплата по факту просмотра мебели</p>
                        </label>
                    </li>
                </ul>
            </div>
       
        </div>
     
    </div>
  )
}

export default Header