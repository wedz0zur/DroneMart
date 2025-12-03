import React, { useState } from "react";
import "./Popular_products.css";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaStar, FaRegStar } from "react-icons/fa";

const Popular_products = () => {
    const [favorites, setFavorites] = useState([false, false, false, false]);
    
    const toggleFavorite = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
    };
    
    const products = [
        { 
            name: "DJI Mini 3 Pro", 
            price: 8800, 
            inStock: true, 
            rating: 4.8,
            image: "/images/drone.jpg" 
        },
        { 
            name: "DJI Avata FPV Combo", 
            price: 12500, 
            inStock: true, 
            rating: 4.9,
            image: "/images/drone.jpg" 
        },
        { 
            name: "DJI Air 2S Fly More", 
            price: 15000, 
            inStock: false, 
            rating: 4.7,
            image: "/images/drone.jpg" 
        },
        { 
            name: "DJI Mavic 3 Classic", 
            price: 22000, 
            inStock: true, 
            rating: 4.9,
            image: "/images/drone.jpg" 
        }
    ];

    const renderStars = (rating) => {
        return (
            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    i < Math.floor(rating) ? 
                    <FaStar key={i} size={14} /> : 
                    <FaRegStar key={i} size={14} />
                ))}
                <span>({rating})</span>
            </div>
        );
    };

    return (
        <section className="container">
            <h1 className="name-section">Популярные товары</h1>
            <div className="list">
                {products.map((product, index) => (
                    <div className="item" key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className="rating">
                            {renderStars(product.rating)}
                        </div>
                        <h1>{product.name}</h1>
                        <p className="price">{product.price.toLocaleString('ru-RU')}</p>
                        <div className="item-block">
                            <p className={`availability ${!product.inStock ? 'out-of-stock' : ''}`}>
                                {product.inStock ? 'В наличии' : 'Нет в наличии'}
                            </p>
                            <button 
                                className={`item-btn ${favorites[index] ? 'active' : ''}`}
                                onClick={() => toggleFavorite(index)}
                            >
                                <IoHeartOutline size={18} />
                                <IoHeartSharp size={18} fill="#ef4444" />
                            </button>
                        </div>
                        <button 
                            className="item-btn2" 
                            disabled={!product.inStock}
                        >
                            {product.inStock ? 'В корзину' : 'Уведомить о поступлении'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Popular_products;