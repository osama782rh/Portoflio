import React from 'react';
import '../styles/about.css';
import profileImage from '../assets/profil.png';

function About() {
  return (
    <section className="about" id="about">
      <h2>À propos de moi</h2>
      <div className="about-content">
        <div className="image-container">
          <img src={profileImage} alt="Profil" className="about-image" />
        </div>
        <div className="about-text">
          <p>
            Ingénieur informatique et DevOps expérimenté, je suis passionné par la création de logiciels innovants et performants. J'ai développé une expertise approfondie en utilisant une variété de technologies, notamment Java, Python, et C++. Mon parcours professionnel m'a également permis de devenir un expert en DevOps, particulièrement grâce à mon expérience avec Azure DevOps et d'autres plateformes de gestion de projets DevOps. Je maîtrise la mise en place de pipelines CI/CD (Intégration Continue/Déploiement Continu) pour garantir des déploiements de code rapides et fiables. Mon expertise en développement et en DevOps me permet de concevoir et de livrer des solutions logicielles de haute qualité, répondant aux besoins spécifiques des entreprises.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
