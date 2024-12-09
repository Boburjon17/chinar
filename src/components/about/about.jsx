import React from 'react'
import './about.scss'
import aboutImg3 from '../../assets/images/about-b-img3.png'
import aboutImg4 from '../../assets/images/about-b-img4.png'

const About = () => {
  return (
    <div  className='about-container'>
        <div className="about">
            <div className="about-content">
                <div className="about-content-top">
                <div className="about-content-small">
                    <h1>О нас</h1>
                    <p>Наша компания OOO “ Firdavs Mebel” успешно работает на мебельном рынке с 2008 года, на протяжении этих лет мы накопили бесценный практический опыт. До мелочей отрабатывались все технологические
                       и производственные процессы, отшлифовывалось каждое движение.
                        <br /> <br />
                       Мы предлагаем МЕБЕЛИ под брендом “СНINAR“ из искусственного ротанга с большим ассортиментом, а также постоянно пополняется коллекция. </p>
                </div>

                <div className="about-content-small">
                    <h2>60+</h2>
                    <h6>сотрудников</h6>
                </div>
                <div className="about-content-small">
                    <h2>7</h2>
                    <h6>стран для экспорта</h6>
                </div>
                <div className="about-content-small">
                    <h2>16</h2>
                    <h6>лет опыта</h6>
                </div>
                <div className="about-content-small">
                    <h2>60.000+</h2>
                    <h6>довольных клиентов</h6>
                </div>
                <div className="about-content-small">
                    <h2>200+</h2>
                    <h6>видов продуктов</h6>
                </div>
                </div>
                <div className="about-content-bottom">
                <div className="about-content-small2">
                <img src={aboutImg3} alt="" />
                </div>
                <div className="about-content-small2">
                    <img src={aboutImg4} alt="" />
                </div>
                </div>
               
               
            </div>
            .
            <h1>С 2008 года мы сделали более <span>  100 000 единиц </span>мебели</h1>
            <p>Разной сложности и конфигурации</p>
        </div>
    </div>
  )
}

export default About