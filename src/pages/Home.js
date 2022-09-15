import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/background-home.png";
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero image={backgroundImage} path={"/"}/>
      <div className='main-container'>
        <Card title="Titre de la location"/>
        <Card title="Titre de la location"/>
        <Card title="Titre de la location"/>
      </div>
      <Footer />
    </>
  )
}

export default Home