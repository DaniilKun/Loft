import React from 'react'
import IconsSVG from "../../assets/image/sprite.svg";

export const Icon = ({ width, height, iconId, xmlns = 'http://www.w3.org/2000/svg'}) => {
  return (
    <svg xmlns={xmlns} width={width} height={height}>
      <use xlinkHref={`${IconsSVG}#${iconId}`}></use>
    </svg>
  )
}
