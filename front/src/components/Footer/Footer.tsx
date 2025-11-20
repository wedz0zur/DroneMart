import React from 'react';
import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DRONEMART</h3>
            <p>Профессиональные дроны для бизнеса и творчества</p>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>info@dronemart.ru</p>
            <p>+7 (999) 999-99-99</p>
          </div>
          <div className="footer-section">
            <h4>Режим работы</h4>
            <p>Пн-Пт: 9:00-18:00</p>
            <p>Сб-Вс: выходной</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DRONEMART. Все права защищены.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;