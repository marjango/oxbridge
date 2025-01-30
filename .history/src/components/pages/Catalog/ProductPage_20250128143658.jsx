import React, { useRef, useEffect, useState } from "react";
import s from './ProductPage.module.css';
import { useParams } from "react-router-dom";
import products from './products.js';

export default function ProductPage() {
    const { id } = useParams();
    const addBtnRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleClick = () => setIsActive((prev) => !prev);

        const addBtn = addBtnRef.current;
        if (addBtn) {
            addBtn.addEventListener("click", handleClick);
        }

        return () => {
            if (addBtn) {
                addBtn.removeEventListener("click", handleClick);
            }
        };
    }, []);

    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <p>Продукт не найден</p>;
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
                    <button ref={addBtnRef} className={s.moreBtn}>добавить еще...</button>
                </div>

                <div className={`${s.btnGroup} ${isActive ? s.active : ""}`}>
                    <button className={s.btn1}>свою вышивку</button>
                    <button className={s.btn2}>брошь</button>
                    <button className={s.btnExtra}>4000тг<span></span></button>
                </div>

                <div className={s.arrows}>
                    <span className={s.left}></span>
                    <span className={s.right}></span>
                </div>

                <div className={s.cardImg} style={{ backgroundImage: `url(${product.image})` }}>
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
    );
}
