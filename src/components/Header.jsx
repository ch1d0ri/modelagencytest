import React from "react";
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <div className="logo">Devil May Love</div>
            <nav className="nav">
                <a href="#models">Модели</a>
                <a href="#about">О нас</a>
                <a href="#contact">Услуги и требования</a>
            </nav>
        </header>
    )
}
export default Header;