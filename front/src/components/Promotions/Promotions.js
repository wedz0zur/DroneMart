import React from 'react'
import './Promotions.css'

const Promotions = () => {

    return (
        <section className='promotions container'>
            <h1 className='promotions-title'>Акции</h1>
            <div className='promotions-grid'>
                <div className='promotion-card'>
                    <div className='promotion-img promotion-img-1'></div>
                    <div className='promotion-content'>
                        <h3 className='promotion-name'>Скидка 30% на аксессуары</h3>
                        <p className='promotion-desc'>Все чехлы, зарядки и подставки DJI</p>
                        <div className='promotion-footer'>
                            <span className='promotion-date'>до 15.05</span>
                            <button className='button promotion-btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
                
                <div className='promotion-card'>
                    <div className='promotion-img promotion-img-2'></div>
                    <div className='promotion-content'>
                        <h3 className='promotion-name'>Бесплатная доставка</h3>
                        <p className='promotion-desc'>При заказе от 50 000₽ по всей России</p>
                        <div className='promotion-footer'>
                            <span className='promotion-date'>до 30.04</span>
                            <button className='button promotion-btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
                
                <div className='promotion-card'>
                    <div className='promotion-img promotion-img-3'></div>
                    <div className='promotion-content'>
                        <h3 className='promotion-name'>Подарок к покупке</h3>
                        <p className='promotion-desc'>Карта памяти 128GB к DJI Mini 3 Pro</p>
                        <div className='promotion-footer'>
                            <span className='promotion-date'>до 20.05</span>
                            <button className='button promotion-btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
                
                <div className='promotion-card'>
                    <div className='promotion-img promotion-img-4'></div>
                    <div className='promotion-content'>
                        <h3 className='promotion-name'>Trade-in</h3>
                        <p className='promotion-desc'>Скидка 25% при обмене старого дрона</p>
                        <div className='promotion-footer'>
                            <span className='promotion-date'>постоянно</span>
                            <button className='button promotion-btn'>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotions