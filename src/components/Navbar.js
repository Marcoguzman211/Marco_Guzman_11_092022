import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>
          <img src='' alt='Logo de KASA' />
        </Link>
        <Link to='/'>Accueil</Link>
        <Link to="/about">À Propos</Link>
    </nav>
  )
}

export default Navbar