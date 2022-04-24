import "./product.scss";
import React from "react";
import IconsSVG from "../../assets/image/sprite.svg";
import chair from "../../assets/image/chair.jpg";

export const Product = () => {
  return (
    <section className="product">
      <button className="product__like">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
          <use xlinkHref={`${IconsSVG}#like`}></use>
        </svg>
      </button>
      <div className="product__ava">
        <img src={chair} alt="cтул" />
      </div>
      <div className="product__all">
        <div className="product__txt1">Толикс-2 White Gloss</div>
        <div className="product__txt2">Барные стулья</div>
        <div className="product__txt3">4 690₽</div>
        <div className="product__txt4">Размеры</div>
        <div className="product__info">
          <div>
            <div className="product__parametr">ШИРИНА</div>
            <div className="product__size">43 СМ</div>
          </div>
          <div className="product__x">×</div>
          <div>
            <div className="product__parametr">ГЛУБИНА</div>
            <div className="product__size">43 СМ</div>
          </div>
          <div className="product__x">×</div>
          <div>
            <div className="product__parametr">ВЫСОТА</div>
            <div className="product__size">77 СМ</div>
          </div>
        </div>
        <button className="product__by">Добавить в корзину</button>
      </div>
    </section>
  );
};
