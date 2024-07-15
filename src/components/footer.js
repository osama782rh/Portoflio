import React from 'react';
import '../styles/footer.css';
import Linkedin from "../assets/Technos/linkedin.png";
import Github from "../assets/Technos/github.png";
import HackerRank from "../assets/Technos/hackerRank.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:osama.rahim@outlook.fr">osama.rahim@outlook.fr</a></p>
          <p>Téléphone: <a href="tel:+33612345678">+33 7 65 66 82 82</a></p>
        </div>
        <div className="footer-section social">
          <h2>Suivez-moi</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/osama-rahim" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" /> LinkedIn
            </a>
            <a href="https://github.com/osama782rh" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="GitHub" /> GitHub
            </a>
            <a href="https://www.hackerrank.com/profile/osama_rahim" target="_blank" rel="noopener noreferrer">
              <img src={HackerRank} alt="HackerRank" /> HackerRank
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Osama Rahim. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
