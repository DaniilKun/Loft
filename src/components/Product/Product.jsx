import './product.scss'
import React, { useState } from 'react'
import chair from '../../assets/image/chair.jpg'
import { Link } from 'react-router-dom'
import { Icon } from '../atoms/Icon'

export const Product = ({ card }) => {

  const [like, setLike] = useState(false)
  const { title, id, subtitle } = card

  const toggleLike = (e) => {
    e.preventDefault()
    setLike(!like)
  }

  const changeProduct = (e) => {
    if (e.target.tagName === 'svg' || e.target.tagName === 'BUTTON') {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  return (
    <Link
      onClick={(e) => changeProduct(e)}
      to={`products/${id}`}
      className="product"
    >
      <div className="product__wrap">
        <button
          onClick={(e)=> toggleLike(e)}
          className={[like ? 'product__like active' : 'product__like']}
        >
          <Icon iconId="like" width="19" height="17" />
        </button>
        <div className="product__ava">
          <img src={chair} alt="cтул" />
        </div>
        <div className="product__all">
          <div className="product__title">{title}</div>
          <div className="product__subtitle">{subtitle}</div>
          <div className="product__price">4 690₽</div>

          <div className="product__drop-info">
            <div className="product__size">Размеры</div>
            <div className="product__info">
              <div className="product__info-item">
                <h3>ШИРИНА</h3>
                <p>43 СМ</p>
              </div>
              <div className="product__x">×</div>
              <div className="product__info-item">
                <h3>ГЛУБИНА</h3>
                <p>43 СМ</p>
              </div>
              <div className="product__x">×</div>
              <div className="product__info-item">
                <h3>ВЫСОТА</h3>
                <p>77 СМ</p>
              </div>
            </div>
            <button className="product__btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
