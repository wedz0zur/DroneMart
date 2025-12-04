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
                    <div className="footer-social-icons flex">
                        <img src="/images/twitter.svg" className="footer-social-icon"></img>
                        <img src="/images/facebook.svg" className="footer-social-icon"></img>
                        <img src="/images/instagramm.svg" className="footer-social-icon"></img>
                        <img src="/images/telegram.svg" className="footer-social-icon"></img>
                    </div>
                </div>
                <div className="footer-block-line"></div>
                <div className="footer-block-second flex">
                    <p className="footer-link-police">© Copyright 2021, All Rights Reserved</p>
                    <div className="footer-link-police-block flex">
                        <Link className="footer-link-police">Privacy Policy</Link>
                        <Link className="footer-link-police">Terms & Conditions</Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer