import React from "react";
import s from './ProductPage.module.css'
import { useParams } from "react-router-dom";
import products from './products.js';
export default function ProductPage() {
    const { id } = useParams();

    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <p>Продукт не найден</p>; // Если продукта нет
    }

    return (
        <div className={s.container}>
            <div className={s.card}>
                <div className={s.colors}>
                    <span className={s.color1}></span>
                    <span className={s.color2}></span>
                    <span className={s.color3}></span>
                </div>
                <div className={s.add}>
                    <button className={s.moreBtn}>добавить еще...</button>
                    {/* <button className={s.btn1}>свою вышивку</button> */}
                </div>
                <div className={s.btn-group}>
                    <button className={s.btn-1}>свою вышивку</button>
                    <button className={s.btn-2}>Кнопка 2</button>
                    <button className={s.btn-extra}>Доп. кнопка</button>
                </div>
                <div className={s.arrows}>
                    <span className={s.left}></span>
                    <span className={s.right}></span>
                </div>
                <div className={s.cardImg}
                 style={{backgroundImage: `url(${product.image})` }}>
                    {/* <img src={product.image} alt={product.name} className={s.productImage} /> */}
                </div>
                <div className={s.productDetails}>
                    <p>{product.price} тг</p>
                    <span className={s.line}></span>
                    <p>Материал: {product.material}</p>
                    <div className={s.buttons}>
                        <span className={s.cartIcon}></span>
                        <span className={s.heartIcon}></span>
                    </div>
                </div>
            </div>
            <div className={s.recommendations}>
                <h1>Рекомендации</h1>
            </div>
      </div>
    )
  }
  