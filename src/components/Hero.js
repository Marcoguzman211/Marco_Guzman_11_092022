import React from 'react'
import small from "../assets/background-about-responsive.png"

const Hero = ({image, path}) => {
   if (path === "/about") {
      return (
         <div className='hero-container'>
            {/* <img src={image} alt='hero' className="hero-image-responsive" /> */}
            <picture className="hero-image-responsive">
               <source srcset={image} media="(min-width: 768px)"/>
               <img src={small} alt="example"/>
            </picture>
         </div>
      )
   } else {
     return (
       <div className='hero-container'>
           <img src={image} alt="I mage montrant des arbres" className='hero-image'/>
           {path === "/" ? <p className='hero-text'>Chez vous, partout et ailleurs</p> : null}
       </div>
     )
   }
}

export default Hero