import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className=" flex v-center">
      <div className="container flex v-center">
        <h1>DroneMart</h1>
        <span>Лучшие цены в интернет-магазинах </span>
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
