import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slideshow from '../components/Slideshow';

const Logement = () => {
  const { id } = useParams();
  return (
    <>
    <Navbar />
    {/* Slide show */}
    <Slideshow id={id}/>
    {/* Titre, photo, location, tags and stars */}
    {/* Slide show */}
    <Footer />
    </>
  )
}

export default Logement