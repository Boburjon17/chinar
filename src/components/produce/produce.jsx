import React from "react";
import "./produce.scss";
import produceBoxImg1 from '../../assets/images/produce-box1.png'
import produceBoxImg2 from '../../assets/images/produce-box2.png'
import produceBigImage from '../../assets/images/produce-big-img.png'
const Produce = () => {
  return (
    <div className="produce-container">
      <div className="produce">
        <h1>Производим 4 основных категории мебели</h1>
        <p>более 200 видов продуктов во всем ассортименте</p>

        <div className="produce-b-img">
          <div className="produce-img-small">
           <div className="produce-img-text">
           <h3>Комплекты</h3>
            <a href="#">
              <button>15 продуктов</button>
            </a>
           </div>
          </div>

          <div className="produce-img-small">
          <div className="produce-img-text">
            <h3>Подвесные креслаы</h3>
            <a href="#">
              <button>7 продуктов</button>
            </a>
            </div>
          </div>

          <div className="produce-img-small">
          <div className="produce-img-text">

            <h3>Диваны и кресла</h3>
            <a href="#">
              <button>3 продуктов</button>
            </a>
          </div>
          </div>

          <div className="produce-img-small">
          <div className="produce-img-text">

            <h3>Шезлонги</h3>
            <a href="#">
              <button>1 продуктов</button>
            </a>
        </div>
          </div>
          </div>

        <h2>Каталог готовых изделий</h2>
        <h6>которые можно купить здесь и сейчас</h6>
        <ul>
          <li>Комплекты</li>
          <li>Подвесные кресла</li>
          <li>Диваны и кресла</li>
          <li>Шезлонги</li>
        </ul>

        <div className="produce-boxes">
            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>

            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул ALLY VBP-206</h3>
                    <h5>Светло бежевый</h5>

                </div>
            </div>



            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg2} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Рио</h3>
                    <h5>Велюрово синий</h5>

                </div>
            </div>

            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>


            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>

            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>

            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg2} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>

            <div className="produce-box">
                <div className="produce-box-img">
                    <img src= {produceBoxImg1} alt="" />
                </div>
                <div className="produce-box-title">
                    <h3>Стул Венеция</h3>
                    <h5>Белый</h5>

                </div>
            </div>


           
        </div>
        <div className="produce-big-background" >
          <img src={produceBigImage} alt="" />
                   </div>

          <div className="produce-btn">
          <a href="#"><button> ПЕРЕЙТИ В КАТАЛОГ</button></a>

          </div>

      </div>
    </div>
  );
};

export default Produce;
