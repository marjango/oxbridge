import React from 'react'
import './style.css'
import facebook from './img/Facebook.svg'
import inst from './img/Instagram.svg'
import whats from './img/WhatsApp.svg'

export default function Footer() {
  return (
    <footer>
        <div className="footerBox container">
            <div className="links">
                <p>новости в мире мод</p>
                <p>каталог</p>
                <p>сезонные коллекции</p>
                <p>отзывы</p>
            </div>
            <div className="socialMedia">
                <h1>OXBRIDGE</h1>
                <div>
                <button><img src={facebook} alt="whatsapp" /></button>
                <button><img src={inst} alt="instagram" /></button>
                <button><img src={whats} alt="facebook" /></button>
                </div>
            </div>
            <div className="links links2">
                <p>сделать предзаказ</p>
                <p>сотрудничество</p>
                <p>бестселлеры</p>
            </div>
        </div>
    </footer>
  )
}
