import React from 'react'
import logo from "../assets/logo-kasa.png";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <NavLink to='/'>
          <img src={logo} className='navbar-logo' alt='Logo de KASA' />
        </NavLink>
        <div className='navbar-items'>
          <NavLink to='/' className="navbar-item">Accueil</NavLink>
          <NavLink to="/about" className="navbar-item">À Propos</NavLink>
        </div>
    </nav>
  )
}

export default Navbar