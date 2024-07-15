import React from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: "Algos de tri",
    description: "Je compare les algos de tri pour les tester sur leur rapidité et leur consommation, et je crée un algorithme hybride plus rapide en C et en Python.",
    image: require('../assets/Projets/esiee-it_sort.png'),
    link: "https://github.com/osama782rh/Sorting-Algo",
    technologies: ["C", "Python"]
  },
  {
    title: "Planit",
    description: "Application mobile pour gérer ses tâches personnelles, ses calendriers et voir ses contacts. Utilise Flutter et Firebase.",
    image: require('../assets/Projets/planit.png'),
    link: "https://github.com/osama782rh/Projet-Mobile",
    technologies: ["Flutter", "Firebase"]
  },
  {
    title: "Stellaris Eval Bot",
    description: "Je programme un robot pour avancer, tourner sur lui-même, etc., en Assembleur.",
    image: require('../assets/Projets/stellarisevalbot.png'),
    link: "https://github.com/osama782rh/Robot-Stellaris",
    technologies: ["Assembleur"]
  },
  {
    title: "Breast Cancer",
    description: "Code pour charger et analyser des données de transactions par carte de crédit, préparer ces données pour l'entraînement d'un modèle de machine learning, et entraîner et évaluer un modèle de réseau de neurones avec TensorFlow. Utilise Python.",
    image: require('../assets/Projets/breastcancer.png'),
    link: "https://github.com/osama782rh/BreastCancerDiagnostic",
    technologies: ["Python", "TensorFlow"]
  },
  {
    title: "Neige de l'Antarctique",
    description: "Je mets en place une scène en Unity où il y a de la neige qui tombe en utilisant des shaders graphs, tesselation, etc.",
    image: require('../assets/Projets/neigedel\'antarctique.png'),
    link: "https://github.com/osama782rh/Neige-de-l-Antarctique",
    technologies: ["Unity"]
  },
  {
    title: "Eco Système",
    description: "Un projet développé en C++ où il y a des loups, des moutons, de l'herbe et les animaux doivent survivre.",
    image: require('../assets/Projets/ecosysteme.png'),
    link: "https://github.com/osama782rh/ProjetEcoSysteme",
    technologies: ["C++"]
  },
  {
    title: "Galactic vr",
    description: "Je mets en place une scène en réalité virtuelle dans un vaisseau spatial",
    image: require('../assets/Projets/galactic.png'),
    link: "https://github.com/osama782rh/VR-Galactic",
    technologies: ["Unity"]
  }
];

function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-overlay">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-title">{project.title}</div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies.join(', ')}</p>
                <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">Voir plus</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
