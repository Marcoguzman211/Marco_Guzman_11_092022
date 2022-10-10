import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='notFound-container'>
        <h1 className='notFound-code'>404</h1>
        <p className='notFound-message'>Oups! La page que vous demandez n&apos;existe pas</p>
        <NavLink to="/" className="notFound-link">Retourner sur la page d&apos;accueil</NavLink>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
