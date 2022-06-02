import React, { useEffect, useState } from 'react'
import { APIGetProducts } from '../../api'
import { Product } from '../Product/Product'
import './productList.scss'

export const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const data = await APIGetProducts()
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <div className="product-list">
      <h2 className="product-list__title">Хиты продаж</h2>
      <div className='product-list__content'>
        {products &&
          products.map((card) => {
            return <Product card={card} />
          })}
      </div>
    </div>
  )
}
