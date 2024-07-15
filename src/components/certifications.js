import React from 'react';
import '../styles/certifications.css';
import githubPdf from '../assets/Certifications/LinkedinCertificateOfCompletion_Practical GitHub Project Management and Collaboration.pdf';
import azureDevopsPdf from '../assets/Certifications/LinkedinCertificateOfCompletion_Azure DevOps for Beginners.pdf';
import cybersecurityPdf from '../assets/Certifications/LinkedinCertificateOfCompletion_Cybersecurity Foundations.pdf';
import levelUpCPdf from '../assets/Certifications/LinkedinCertificateOfCompletion_Level Up C.pdf';
import devsecopsPdf from '../assets/Certifications/LinkedinCertificateOfCompletion_DevOps Foundations DevSecOps.pdf';
import javaPdf from '../assets/Certifications/java_basic certificate.pdf';
import problemSolvingPdf from '../assets/Certifications/problem_solving_intermediate certificate.pdf';
import softwareEngineerInternPdf from '../assets/Certifications/software_engineer_intern certificate.pdf';
import softwareEngineerPdf from '../assets/Certifications/software_engineer certificate.pdf';
import azureDevopsImg from '../assets/Certifications/AzureDevOpsforBeginners.png';
import githubImg from '../assets/Certifications/PractifcalGitHubProjectManagementandCollaboration.png';
import cybersecurityImg from '../assets/Certifications/CybersecurityFoundations.png';
import devsecopsImg from '../assets/Certifications/DevOpsFoundationsDevSecOps.png';
import csharpImg from '../assets/Certifications/csharp.png';
import javaImg from '../assets/Certifications/java.png';
import problemSolvingImg from '../assets/Certifications/problesolving.png';
import softwareEngineerInternImg from '../assets/Certifications/softwareengineerintern.png';
import softwareEngineerImg from '../assets/Certifications/software_engineer.png';
import cybersecurityThreatPdf from '../assets/Certifications/CertificateOfCompletion_The Cybersecurity Threat Landscape.pdf'
import cybersecurityThreatImg from '../assets/Certifications/CertificateOfCompletion_The Cybersecurity Threat Landscape.png'

const certifications = [
  {
    title: 'Practical GitHub Project Management and Collaboration',
    image: githubImg,
    link: githubPdf,
  },
  {
    title: 'Azure DevOps for Beginners',
    image: azureDevopsImg,
    link: azureDevopsPdf,
  },
  {
    title: 'Cybersecurity Foundations',
    image: cybersecurityImg,
    link: cybersecurityPdf,
  },
  {
    title: 'DevSecOps',
    image: devsecopsImg,
    link: devsecopsPdf,
  },
  {
    title: 'Level Up C',
    image: csharpImg,
    link: levelUpCPdf,
  },
  {
    title: 'Java',
    image: javaImg,
    link: javaPdf,
  },
  {
    title: 'Problem Solving',
    image: problemSolvingImg,
    link: problemSolvingPdf,
  },
  {
    title: 'Software Engineer Intern',
    image: softwareEngineerInternImg,
    link: softwareEngineerInternPdf,
  },
  {
    title: 'Software Engineer',
    image: softwareEngineerImg,
    link: softwareEngineerPdf,
  },

  {
    title: 'Cybersecurity Threat Landscape',
    image: cybersecurityThreatImg,
    link: cybersecurityThreatPdf,
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-item">
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} />
              <p>{cert.title}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
