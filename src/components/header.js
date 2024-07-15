import React from 'react';
import '../styles/header.css';

function Header() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="overlay">
        <div className="header-content">
          <h1 className="animate-title">RAHIM Osama</h1>
          <p className="animate-title">Développeur web et applications</p>
          <button className="btn" onClick={scrollToAbout}>Plus d'info</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
