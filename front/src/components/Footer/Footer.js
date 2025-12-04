import React from "react"
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <section className="container footer-container">
                <div className="footer-block-first flex">
                    <Link to="/" className="footer-link-home">DroneMart</Link>
                    <nav className="footer-nav flex">
                        <Link to="/about" className="footer-link-nav">О нас</Link>
                        <Link to="/drone-registration" className="footer-link-nav">Регистрация дронов</Link>
                        <Link to="/partners" className="footer-link-nav">Наши партнёры</Link>
                        <Link to="/support" className="footer-link-nav">Помощь</Link>

                    </nav>
                    <div className="footer-social-icons flex"></div>
                </div>
                <div className="footer-block-line"></div>
                <div className="footer-block-second"></div>

                adssdasda
            </section>
        </footer>
    )
}

export default Footer