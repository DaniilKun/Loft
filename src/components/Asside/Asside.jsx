import React from "react";
import { Link } from "react-router-dom";
import IconSVG from "../../assets/image/sprite.svg";
import './asside.scss'


export const Asside = () => {

  const data = [
    { id: 1, title: 'Кухни', img: 'kitchen' },
    { id: 2, title: 'Спальни', img: 'bedroom' },
    { id: 3, title: 'Гостинные', img: 'livingroom' },
    { id: 4, title: 'Прихожие', img: 'closet' },
    { id: 5, title: 'Офисная мебель', img: 'office' },
    { id: 6, title: 'Детская', img: 'childrensroom' },
    { id: 6, title: 'Детская', img: 'actions' },
    { id: 6, title: 'Детская', img: 'new' },
    { id: 6, title: 'Детская', img: 'mattress' },
    { id: 6, title: 'Детская', img: 'armchair' },
    { id: 6, title: 'Детская', img: 'cupboard' },
  ]
  return (

    <div className="asside">
      {data.map((asside) => {
        return (
          <Link to='/беги!' className="asside__item" key={asside.id}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22 ">
              <use xlinkHref={`${IconSVG}#${asside.img}`}></use>
            </svg>
            <h2>{asside.title}</h2>
          </Link>
        )
      })}
      <button className="asside__btn-close">
        Х
      </button>
    </div>
  )
}

