import React from 'react';
import '../styles/logo.css';
import imageLogo from '../assets/logo.webp';

function Logo() {
  return (
    <div className="logo">
      <a href="/">
        <img src={imageLogo} alt="Logo" />
      </a>
    </div>
  );
}

export default Logo;
