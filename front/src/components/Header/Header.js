import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" flex v-center">
      <div className="container flex v-center">
        <Link to="/" className="lik-home">DroneMart</Link>
        <span className="header-span">Лучшие цены в интернет-магазинах </span>
        <button className="catalog">Каталог товаров</button>
        <input type="search" placeholder="Поиск товаров"></input>
        <div className="header-item flex center">
          <img src="/images/heart.svg"></img>
        </div>
        <div className="header-item flex center">
          <img src="/images/basket.svg" className="basket"></img>
        </div>
        <div className="header-item flex center">
          <img src="/images/user.svg"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
