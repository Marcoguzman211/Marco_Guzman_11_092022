import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import backgroundImage from "../assets/background-about.png";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero path="/about" image={backgroundImage} />
    </>
  )
}

export default About