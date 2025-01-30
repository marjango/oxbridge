import React, { useState } from "react";
import s from "./ProductPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import products from "./products.js";

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate(); // Перенесли вверх, до любых условий

    const [isBtnGroupActive, setBtnGroupActive] = useState(false); 
    const [isBtnExtraVisible, setBtnExtraVisible] = useState(false); 

    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <p>Продукт не найден</p>;
    }

    const handleAddClick = () => {
        setBtnGroupActive((prev) => !prev);
    };

    const handleBtn1Click = () => {
        setBtnExtraVisible((prev) => !prev);
    };

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className={s.container}>
            <div className={s.mainCard}>
                <div className={s.colors}>
                    <span className={s.color1}></span>
                    <span className={s.color2}></span>
                    <span className={s.color3}></span>
                </div>
                <div className={s.add}>
                    <button className={s.moreBtn} onClick={handleAddClick}>
                        добавить еще...
                    </button>
                </div>
                <div className={`${s.btnGroup} ${isBtnGroupActive ? s.active : ""}`}>
                    <button className={s.btn1} onClick={handleBtn1Click}>
                        свою вышивку
                    </button>
                    <button className={s.btn2}>брошь</button>
                    {isBtnExtraVisible && (
                        <button className={s.btnExtra}>4000тг <span></span></button>
                    )}
                </div>
                <div className={s.cardImg} style={{ backgroundImage: `url(${product.image})` }}></div>
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
                <div className={s.catalogContainer}>
                    {products.filter(prod => prod.id !== parseInt(id)).slice(0, 7).map((product) => (
                        <article className={s.card} key={product.id} onClick={() => handleCardClick(product.id)}>
                            <div className={s.cardImg}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className={s.cardFooter}>
                                <h1>{product.name}</h1>
                                <span className={s.heartIcon}></span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
