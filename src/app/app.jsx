import React from "react";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Главная from "../pages/Главная";
import Гарантии from "../pages/Гарантии";
import Каталог from "../pages/Каталог";
import Продукты from "../pages/Продукты";
import Компании from "../pages/Компании";
import Доставка from "../pages/Доставка";
import Производство from "../pages/Производство";
import Контакты from "../pages/Контакты";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Главная />
        <Каталог />
        <Гарантии />
        <Продукты />
        <Компании />
        <Доставка />
        <Производство />
        <Контакты />
      </BrowserRouter>
    </>
  );
};

export default App;
