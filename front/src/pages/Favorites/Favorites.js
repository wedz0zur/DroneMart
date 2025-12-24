import React from "react";
import "./Favorites.css";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa";

const Favorites = () => {
  return (
    <section className="container favorites-page">
      <h1 className="name-section">Избранное</h1>

      <div className="list">
        <div className="item">
          <img src="/images/drone.jpg" alt="DJI Mini 3 Pro" />

          <div className="rating">
            <div className="stars">
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaStar size={14} />
              <FaRegStar size={14} />
              <span>(4.8)</span>
            </div>
          </div>

          <h1>DJI Mini 3 Pro</h1>
          <p className="price">8 800</p>

          <div className="item-block">
            <p className="availability">В наличии</p>
            <button className="item-btn active">
              <IoHeartOutline size={18} />
              <IoHeartSharp size={18} fill="#ef4444" />
            </button>
          </div>

          <button className="item-btn2">В корзину</button>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
