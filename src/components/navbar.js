import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/navbar.css';
import Logo from './logo';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`navbar ${showNavbar ? '' : 'hidden'}`}>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li><Link smooth to="/home#home" onClick={() => setMenuActive(false)}>Accueil</Link></li>
        <li><Link smooth to="/home#skills" onClick={() => setMenuActive(false)}>Compétences</Link></li>
        <li><Link smooth to="/home#contact" onClick={() => setMenuActive(false)}>Contact</Link></li>
        <li><Link smooth to="/profile#profile" onClick={() => setMenuActive(false)}>Profil</Link></li>
        <li><Link smooth to="/experiences#experiences" onClick={() => setMenuActive(false)}>Expériences</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
