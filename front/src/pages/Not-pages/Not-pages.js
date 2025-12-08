import React from "react";
import "./Not-pages.css"
import { Link } from 'react-router-dom';

const Not_pages = () => {
    return (
        <section className="not-pages-component container">
            <div className="not-pages-items">
                <img className="x-img" src="/images/x.svg"></img>
                <div className="not-pages-bold-text">
                    <span>404</span>
                    <p>Ошибка</p>
                </div>
                <p className="not-pages-text">Возможно, вы попытались зайти на несуществующую или удалённую страницу.
                    Нам очень жаль, что вы не нашли страницу, которую искали. Попробуйте начать с главной.</p>
                 <Link to="/"><button className="button">На главную</button></Link>
            </div>
        </section>
    )
}

export default Not_pages