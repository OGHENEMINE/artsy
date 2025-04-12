import React from 'react'
import { LargeScreenCarousel } from './LargeScreenCarousel'
import { MobileCarousel } from './MobileCarousel'

const ResponsiveCarousel = () => {
  return (
    <>
        <MobileCarousel/>
        <LargeScreenCarousel/>
    </>
  )
}

export default ResponsiveCarousel