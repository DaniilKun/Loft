import React from 'react'
import { Asside } from '../components/Asside/Asside'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

export const MainLayoit = ({ children }) => {
  return (
    <>
    <Asside />
      <Header />
      {children}
      <Footer />
    </>
  )
}
