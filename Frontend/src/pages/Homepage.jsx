import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'

export const Homepage = () => {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    <ProductShowcase/>
    </>
  )
}
