import React from 'react'
import "./Basket.css"

const Basket = () => {
    return (
        <div className='basket-component container'>
            <div className='basket-title flex'>
                <h1>Карзина</h1>
                <p>Очистить корзину</p>
            </div>
            <div className='basket-blocks-order flex g-distribute'>
                <div className='basket-block-items'>
                    <div className='basket-block-item flex'>
                        <img className='basket-block-item-img' src='/images/drone.jpg'></img>
                        <div className='basket-block-item-name-count flex'>
                            <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                            <p>34243</p>
                        </div>
                        <div className='basket-block-item-x-price flex'>
                            <p>X</p>
                            <p>Итого: 2 690 ₽</p>
                        </div>
                    </div>
                    <div className='basket-block-item flex'>
                        <img className='basket-block-item-img' src='/images/drone.jpg'></img>
                        <div className='basket-block-item-name-count flex'>
                            <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                            <p>34243</p>
                        </div>
                        <div className='basket-block-item-x-price flex'>
                            <p>X</p>
                            <p>Итого: 2 690 ₽</p>
                        </div>
                    </div><div className='basket-block-item flex'>
                        <img className='basket-block-item-img' src='/images/drone.jpg'></img>
                        <div className='basket-block-item-name-count flex'>
                            <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                            <p>34243</p>
                        </div>
                        <div className='basket-block-item-x-price flex'>
                            <p>X</p>
                            <p>Итого: 2 690 ₽</p>
                        </div>
                    </div><div className='basket-block-item flex'>
                        <img className='basket-block-item-img' src='/images/drone.jpg'></img>
                        <div className='basket-block-item-name-count flex'>
                            <p>Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3</p>
                            <p>34243</p>
                        </div>
                        <div className='basket-block-item-x-price flex'>
                            <p>X</p>
                            <p>Итого: 2 690 ₽</p>
                        </div>
                    </div>
                </div>
                <div className='basket-block-registration'>
                    <h1>Оформление заказа</h1>
                    <div className='basket-block-inputs flex column g-distribute'>
                        <input className='basket-block-input' type="text" placeholder='Имя'></input>
                        <input className='basket-block-input' type="number" placeholder='номер телефона'></input>
                        <input className='basket-block-input' type="text" placeholder='Почта'></input>
                        <input className='basket-block-input' type="text" placeholder='Выберите склад'></input>
                    </div>
                    <div className='basket-block-price-count flex g-distribute'>
                        <p className='basket-block-count'>25 товаров</p>
                        <p className='basket-block-price'>Итого: 12 690 ₽</p>
                    </div>
                    <div className='flex center'><button className='button'>Оформить заказ</button></div>
                    <p className='description'>Нажимая кнопку "оформить заказ", вы автоматически соглашаетесь с <span>политикой обработки персональных данных</span> и предоставляете <span>согласие</span> на обработку ваших персональных данных</p>
                </div>
            </div>
        </div>
    )
}

export default Basket