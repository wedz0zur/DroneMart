import React from "react";
import "./Popular_products.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

const Popular_products = () => {
    return (
        <section className="container">
            <h1 className="name-section">Популярные товары</h1>
            <div className="list flex">
                <div className="item">
                    <img src="/images/drone.jpg"></img>
                    <h1>Название</h1>
                    <p className="price">8800р</p>
                    <div className="item-block flex v-center">
                        <p className="availability">В наличии</p>
                        <button className="item-btn flex center"><IoHeartOutline size={18} /><IoHeartSharp size={18} fill="red"/></button>
                        
                    </div>
                    <button className="item-btn2 flex center">В корзину</button>
                </div>
                <div className="item">
                    <img src="/images/drone.jpg"></img>
                    <h1>Название</h1>
                    <p className="price">8800р</p>
                    <div className="item-block flex v-center">
                        <p className="availability">В наличии</p>
                        <button className="item-btn flex center"><IoHeartOutline size={18} /><IoHeartSharp size={18} fill="red"/></button>
                        
                    </div>
                    <button className="item-btn2 flex center">В корзину</button>
                </div>
                <div className="item">
                    <img src="/images/drone.jpg"></img>
                    <h1>Название</h1>
                    <p className="price">8800р</p>
                    <div className="item-block flex v-center">
                        <p className="availability" style={{"color": "red"}}>Нет в наличии</p>
                        <button className="item-btn flex center"><IoHeartOutline size={18} /><IoHeartSharp size={18} fill="red"/></button>
                        
                    </div>
                    <button className="item-btn2 flex center">В корзину</button>
                </div>
                <div className="item">
                    <img src="/images/drone.jpg"></img>
                    <h1>Название</h1>
                    <p className="price">8800р</p>
                    <div className="item-block flex v-center">
                        <p className="availability">В наличии</p>
                        <button className="item-btn flex center"><IoHeartOutline size={18} /><IoHeartSharp size={18} fill="red"/></button>
                        
                    </div>
                    <button className="item-btn2 flex center">В корзину</button>
                </div>
            </div>
        </section>

    )
}

export default Popular_products