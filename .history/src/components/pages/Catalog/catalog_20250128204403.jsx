import s from './catalog.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import products from './products';

const Catalog = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
    window.scrollTo(0, 0);
};

  return (
    <section className={s.catalog}>
      <div className={s.catalogContainer}>
        {products.map((product) => (
          <article className={s.card} key={product.id} onClick={() => handleCardClick(product.id)}>
            <div className={s.cardImg}>
              <img src={product.image} alt={`${product.name}`} />
            </div>
            <div className={s.cardFooter}>
              <h1>{product.name}</h1>
              <span className={s.heartIcon}></span>
            </div>
          </article>
        ))}
      </div>
      <div className={s.catalogContainer}>
        {products.map((product) => (
          <article className={s.card} key={product.id} onClick={() => handleCardClick(product.id)}>
            <div className={s.cardImg}>
              <img src={product.image} alt={`${product.name}`} />
            </div>
            <div className={s.cardFooter}>
              <h1>{product.name}</h1>
              <span className={s.heartIcon}></span>
            </div>
          </article>
        ))}
      </div>
      <div className={s.catalogContainer}>
        {products.map((product) => (
          <article className={s.card} key={product.id} onClick={() => handleCardClick(product.id)}>
            <div className={s.cardImg}>
              <img src={product.image} alt={`${product.name}`} />
            </div>
            <div className={s.cardFooter}>
              <h1>{product.name}</h1>
              <span className={s.heartIcon}></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
