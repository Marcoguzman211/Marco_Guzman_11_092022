import React from 'react';
import logo from '../assets/logo-kasa-white.png';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="logo de kasa" />
        <p>© 2022 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
