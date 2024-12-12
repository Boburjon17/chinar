import React from 'react'
import "./about2.scss"
import about2Img1 from "../../assets/images/about2-img1.png"
import about2Img2 from "../../assets/images/about2-img2.png"
import about2Img3 from "../../assets/images/about2-img3.png"
import about2Img4 from "../../assets/images/about2-img4.png"
import about2Img5 from "../../assets/images/about2-img5.png"
import about2Img6 from "../../assets/images/about2-img6.png"


const About2 = () => {
  return (
    <div className='about2-container'>
        <div className="about2">
            <div className="about2-top">
            <div className="about2-content">
                <div className="about2-content-text">
                    <p>Плетеная мебель часто используется в садах, на террасах и балконах</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img1} alt="" />
                </div>
            </div>

            <div className="about2-content">
                <div className="about2-content-text">
                    <p>Плетеные диваны и кресла могут добавить легкости и элегантности гостиной</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img2} alt="" />
                </div>
            </div>


            <div className="about2-content">
                <div className="about2-content-text">
                    <p>Мебель для кухни и столовой комнаты</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img3} alt="" />
                </div>
            </div>

            </div>
            <div className="about2-bottom">
            <div className="about2-content2">
                <div className="about2-content-text">
                    <p>Плетеные мебели могут добавить спальне нотку романтики и естественности.</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img4} alt="" />
                </div>
            </div>


            <div className="about2-content2">
                <div className="about2-content-text">
                    <p>Комплекты мебели для ресторанов и кафе</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img5} alt="" />
                </div>
            </div>


            <div className="about2-content2">
                <div className="about2-content-text">
                    <p>Плетеное кресло-качалка может стать идеальным местом для отдыха в любом уголке дома или сада.</p>
                </div>
                <div className="about2-content-img">
                    <img src={about2Img6} alt="" />
                </div>
            </div>
            </div>

           

                
            </div>
           

          


           
        </div>
        
   
  )
}

export default About2