import React from 'react'
import LeftSide from './Left'
import Img from './Img'

const Hero = () => {
  return (
    <div className='flex items-center justify-between px-16 py-12'>
      <LeftSide/>
      <Img/>
    </div>
  )
}

export default Hero
