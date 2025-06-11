import React from 'react';
import '../styles/experiences.css';

function Experiences() {
  const experiences = [
    {
      title: 'Ingénieur DevOps',
      company: 'Rexel France',
      dates: 'Septembre 2020 - Présent',
      description: 'Mise en place de pipelines CI/CD, gestion des infrastructures cloud, automatisation des tests et des déploiements. Automatisation des tests en UFT et Selenium.',
      technologies: 'Azure DevOps, UFT, Selenium, Squash ',
    },
    {
      title: 'Développeur Full Stack',
      company: 'T Express',
      dates: 'Novembre 2021 - Janvier 2022',
      description: 'Développement d\'application web et mobile, gestion de base de données. ',
      technologies: 'React, Node.js, Php, Flutter, SQL, Firebase',
    },
    {
      title: 'Développeur Web',
      company: 'Renault Service Plus',
      dates: 'Mars 2021 - Juillet 2021',
      description: 'Développement site web',
      technologies: 'Htlm, Css, Php'
    },
   
  ];

  return (
    <section className="experiences" id="experiences">
      <h2>Expériences</h2>
      <div className="experiences-container">
        {experiences.map((experience, index) => (
          <div className="experience" key={index}>
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.dates}</p>
            <p>{experience.description}</p>
            <p><strong>Technologies: </strong>{experience.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
