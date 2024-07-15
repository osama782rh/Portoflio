import React from 'react';
import '../styles/profile.css';
import profileImage from '../assets/profil.png';
import bacImage from '../assets/ecoles/adrienne_bolland.jpeg';
import btsImage from '../assets/ecoles/jules_ferry.jpeg';
import ingenieurImage from '../assets/ecoles/esiee_it.png';
import arabicImage from '../assets/langues/maroc.png';
import italianImage from '../assets/langues/italie.png';
import englishImage from '../assets/langues/anglais.png';
import frenchImage from '../assets/langues/france.png';
import travelImage from '../assets/hobbies/travel.jpeg';
import photographyImage from '../assets/hobbies/photographie.jpeg';
import readingImage from '../assets/hobbies/reading.jpeg';
import sportsImage from '../assets/hobbies/sport.jpeg';

function Profile() {
  return (
    <section className="profile" id="profile">
      <h2>Profil</h2>
      <div className="profile-container">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <p>
            Ingénieur informatique et DevOps expérimenté, je suis passionné par la création de logiciels innovants et performants. 
            J'ai développé une expertise approfondie en utilisant une variété de technologies, notamment Java, Python, et C++. 
            Mon parcours professionnel m'a également permis de devenir un expert en DevOps, particulièrement grâce à mon expérience 
            avec Azure DevOps et d'autres plateformes de gestion de projets DevOps. Je maîtrise la mise en place de pipelines CI/CD 
            (Intégration Continue/Déploiement Continu) pour garantir des déploiements de code rapides et fiables.
          </p>
          <p>
            En plus de mes compétences techniques, je suis également un excellent communicateur et collaborateur. J'aime travailler en équipe
            et partager mes connaissances avec mes collègues. Je suis toujours à la recherche de nouvelles opportunités pour apprendre et 
            me développer professionnellement. Mon objectif est de continuer à évoluer dans le domaine de l'informatique et du DevOps,
            tout en contribuant à la réussite des projets sur lesquels je travaille.
          </p>
        </div>
      </div>

      <h2>Parcours Scolaire</h2>
      <div className="section-container">
        <div className="section-item">
          <img src={bacImage} alt="Baccalauréat" />
          <div className="section-content">
            <h3>Baccalauréat</h3>
            <p>Lycée Adrienne Bolland</p>
          </div>
        </div>
        <div className="section-item">
          <img src={btsImage} alt="BTS" />
          <div className="section-content">
            <h3>BTS</h3>
            <p>Lycée Jules Ferry</p>
          </div>
        </div>
        <div className="section-item">
          <img src={ingenieurImage} alt="Diplôme d'ingénieur" />
          <div className="section-content">
            <h3>Diplôme d'ingénieur</h3>
            <p>ESIEE-It</p>
          </div>
        </div>
      </div>

      <h2>Langues Parlées</h2>
      <div className="section-container">
        <div className="section-item">
          <img src={arabicImage} alt="Arabe" />
          <div className="section-content">
            <h3>Arabe</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={italianImage} alt="Italien" />
          <div className="section-content">
            <h3>Italien</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={englishImage} alt="Anglais" />
          <div className="section-content">
            <h3>Anglais</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={frenchImage} alt="Français" />
          <div className="section-content">
            <h3>Français</h3>
          </div>
        </div>
      </div>

      <h2>Hobbies</h2>
      <div className="section-container">
        <div className="section-item">
          <img src={travelImage} alt="Voyages" />
          <div className="section-content">
            <h3>Voyages</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={photographyImage} alt="Photographie" />
          <div className="section-content">
            <h3>Photographie</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={readingImage} alt="Lecture" />
          <div className="section-content">
            <h3>Lecture</h3>
          </div>
        </div>
        <div className="section-item">
          <img src={sportsImage} alt="Sports" />
          <div className="section-content">
            <h3>Sports</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;