import React from 'react'
import './homepage.css'
import sct2IMG from '../../img/sct2.svg'
import sct3IMG from '../../img/sct3.svg'
import sct3IMG1 from '../../img/sct3.1.svg'
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate(); // Инициализация навигации

  const goToCatalog = () => {
    navigate("/Catalog");
  }
  return (
    <div>
        <div className="headerMain">
                <div className="headerInfo container">
                    <div className="title">
                        <h1>ПОДХОДЯЩЕЕ ДРУГ ДРУГУ</h1>
                        <p>OXBRIDGE — ваш компас в мире капсульного гардероба, где каждая деталь работает на создание гармонии и удобства</p>
                    </div>
                    <button className="btn" onClick={goToCatalog}>КАТАЛОГ </button>
                </div>
        </div>
        <main>
          <section className='sct1'>
            <div className="sct1-block">
              <h1>УДОБСТВО</h1>
            </div>
            <div className="sct1-block">
              <h1>СТИЛЬ</h1>
            </div>
          </section>
          <section className='sct2'>
                <div className="container">
                  <img src={sct2IMG} alt="" />
                  
                  <div className="sct2Title">
                    <h1>ПОГОНЯ ЗА ЛУЧШИМ</h1>
                    <p>Добро пожаловать в OXBRIDGE, место, где начинается ваша погоня за лучшим! Мы создаем коллекции одежды, которые идеально сочетаются, чтобы 
                      вы могли легко собирать образы, соответствующие вашему вкусу и стилю.
                    Каждая вещь в нашем ассортименте — это шаг к совершенству: будь то повседневный лук, деловой образ или наряд для особого случая. Мы упрощаем выбор, чтобы вы могли сосредоточиться на главном — быть лучшей версией себя.</p>
                  </div>
                </div>
          </section>
          <section className='sct3'>
            <img src={sct3IMG} alt="" />
            <img src={sct3IMG1} alt="" />
            <div className="title">
              <h1>ОБНОВЛЕНИЯ С БОЛЬШИМ<br/> АССОРТИМЕНТОМ</h1>
            </div>
          </section>
          <section className='sct4'>
            <div className="blur">
            <button className="btnSct4">
                  КАТАЛОГ СЕЗОНА
              </button>
            </div>
          </section>
        </main>
    </div>
  )
}
