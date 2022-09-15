import React from 'react'

const Hero = ({image, path}) => {
  return (
    <div className='hero-container'>
        <img src={image} alt="I mage montrant des arbres" className='hero-image'/>
        {path === "/" ? <p className='hero-text'>Chez vous, partout et ailleurs</p> : null}
    </div>
  )
}

export default Hero