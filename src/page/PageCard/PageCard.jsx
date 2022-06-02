import React from 'react'
import { useParams } from 'react-router-dom'
import { Category } from '../../components/Category/Category'
import { SliderCard } from '../../components/SliderCard/SliderCard'
import './PageCard.scss'

export const PageCard = () => {
  const params = useParams()

  const data = [
    { id: 1, title: 'Табуретка' },
    { id: 2, title: 'Еще табуретка' },
    { id: 3, title: 'Крутая табуретка' },
    { id: 4, title: '3' },
    { id: 5, title: 'x' },
    { id: 6, title: 'z' },
    { id: 7, title: 'a' },
    { id: 8, title: 'v' },
    { id: 9, title: 'r' },
  ]

  return (
    <div className="page-card">
      <Category />
      Главная / Гостинные / Мягкая мебель / Диваны
      <SliderCard />
    </div>
  )
}
