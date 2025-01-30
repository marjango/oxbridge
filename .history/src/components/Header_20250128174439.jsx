import React from 'react'
import  './style.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
  return (
    <div>
        <header>
            <nav className='navbar'>
                <div className="container">
                <div className="burger">
                    <div className={`btnBurger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`burgerContent ${isMenuOpen ? "open" : ""}`}>
                            <Link className='links' to='/Homepage' onClick={closeMenu}>главное</Link>
                            <Link className='links' to='/Catalog' onClick={closeMenu}>КАТАЛОГ</Link>
                            <Link className='links' to='/Seasonal' onClick={closeMenu}>СЕЗОННЫЕ</Link>
                            <Link className='links' to='/Feedback' onClick={closeMenu}>СВЯЗАТЬСЯ С НАМИ</Link>
                    </div>
                </div>
               
                <Link to='/' className='logo'>OXBRIDGE</Link> 
                <ul>
                    <Link className='links' to='/Catalog'>КАТАЛОГ</Link>
                    <Link className='links' to='/Seasonal'>СЕЗОННЫЕ</Link>
                    <Link className='links' to='/Feedback'>СВЯЗАТЬСЯ С НАМИ</Link>
                </ul>
                <button className="navBtn">ЗАКАЗ</button>
                </div>
            </nav>
            
        </header>
    </div>
  )
}
