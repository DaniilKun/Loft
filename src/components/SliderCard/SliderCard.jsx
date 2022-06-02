import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './SliderCard.scss'
import BG from '../../assets/image/sliderCard/sliderCard-bg-01.png'
import BG2 from '../../assets/image/sliderCard/sliderCard-bg-02.jpeg'
import BG3 from '../../assets/image/sliderCard/sliderCard-bg-03.jpeg'
import BG4 from '../../assets/image/sliderCard/sliderCard-bg-04.jpeg'
import BG5 from '../../assets/image/sliderCard/sliderCard-bg-05.jpeg'
import BG6 from '../../assets/image/sliderCard/sliderCard-bg-06.jpeg'
import IconsSVG from '../../assets/image/sprite.svg'

export const SliderCard = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const sliderBottomImg = [BG, BG2, BG3, BG4, BG5, BG6]

  return (
    <div className="sliderCard-wrapper">
      <div className="sliderCard">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={0}
          navigation={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-top"
        >
          {sliderBottomImg.map((slide) => {
            return (
              <SwiperSlide className="slider-top__item">
                <img src={slide} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4.5}
          navigation={true}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="slider-bottom"
        >
          {sliderBottomImg.map((slide) => {
            return (
              <SwiperSlide className="slider-bottom__item">
                <img src={slide} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="pageCard">
        <div className="pageCard__rating">

          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
        </div>

        <h2 className="pageCard__title">Динс Velvet Yellow</h2>
        <a className="pageCard__link" href="#">
          Диваны
        </a>

        <div className="pageCard__wrapper">
          <h2 className="pageCard__price">4 690₽</h2>
          <button className="pageCard__btn">Купить</button>

          <div className="pageCard__wishlist">
            <button>
              <svg height="17.5" width="15">
                <use xlinkHref={`${IconsSVG}#wishlist`}></use>
              </svg>
            </button>
            <h2>Добавить в желаемое</h2>
          </div>
        </div>

        <div className="pageCard__subtitle">
          <h2>Цвет</h2>
          <h2>Количество</h2>
          <h2>Размер (Д × Ш × В)</h2>
        </div>
        <div></div>
        <div className="pageCard__description">
          <h2>Описание</h2>
          <p>
            Лаконичные линии и простые формы, безупречный стиль и
            индивидуальность – все это диван «Динс». Сдержанный скандинавский
            дизайн украсит любую современную обстановку. Элегантность, комфорт и
            функциональность, собранные воедино – «Динс» просто создан для
            размеренного отдыха в кругу семьи или компании друзей!
          </p>
        </div>
      </div>
    </div>
  )
}
