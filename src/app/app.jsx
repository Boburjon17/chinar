import React, { useRef } from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Главная from "../pages/Главная";
import Каталог from "../pages/Каталог"
import About3 from "../components/about3/about3";
import Partner from "../components/partners/partner";
import Questions from "../components/questions/questions";
import Footer from "../components/footer/footer";


const App = () => {
  const homeRef = useRef()
  const catologRef = useRef(null)
  const garantiRef = useRef(null)
  const produceRef = useRef(null)
  const companiRef = useRef(null)
  const deliveryRef = useRef(null)
  const productionRef = useRef(null)
  const contactRef = useRef(null)
  return (
    <>
      <BrowserRouter>
        <Navbar
        catologRef={catologRef}
        homeRef= {homeRef}
        garantiRef={garantiRef}
        produceRef={produceRef}
        companiRef={companiRef}
        deliveryRef={deliveryRef}
        productionRef={productionRef}
        contactRef= {contactRef}
        />
        <Routes>
        <Route path="/" element={<Главная  />   }/>
        <Route path="/Каталог" element={<Каталог/>} />
        </Routes>
        <About3/>
        <Partner/>
        <Questions/>
        <Footer/>
        
       
      </BrowserRouter>
    </>
  );
};

export default App;
