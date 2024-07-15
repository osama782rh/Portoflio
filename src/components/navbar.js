import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import Logo from './logo';

function Navbar() {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleNavigation = (path, anchor) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`navbar ${showNavbar ? '' : 'hidden'}`}>
      <div className="logo-container">
        <Logo />
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => handleNavigation('/', 'home')}>Accueil</a></li>
        <li><a href="#skills" onClick={() => handleNavigation('/', 'skills')}>Compétences</a></li>
        <li><a href="#contact" onClick={() => handleNavigation('/', 'contact')}>Contact</a></li>
        <li><a href="#profile" onClick={() => handleNavigation('/profile', 'profile')}>Profil</a></li>
        <li><a href="#experience" onClick={() => handleNavigation('/experiences', 'experiences')}>Expériences</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
