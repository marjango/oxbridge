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
