import React from 'react'
import SampleShop from './Core/SampleShop'
import Reviews from './Core/Reviews'
import Brands from './Core/Brands'
import Footer from './Core/Footer'
import Questions from './Core/Questions'
import Services from './Core/Services'

function HeroSection() {
  return (
    <div>
        <SampleShop/>
        <Brands/>
        <Services/>
        <Reviews/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default HeroSection