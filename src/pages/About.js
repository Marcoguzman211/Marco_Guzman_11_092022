import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import backgroundImage from "../assets/background-about.png";
import Collapse from '../components/Collapse';

const About = () => {
  return (
    <>
      <Navbar />
      <Hero path="/about" image={backgroundImage} />
      <div>
        <Collapse />
        <Collapse />
        <Collapse />
        <Collapse />
      </div>
    </>
  )
}

export default About