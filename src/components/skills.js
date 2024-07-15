import React from 'react';
import '../styles/skills.css';

// Importer les images des langages et frameworks
import javaImage from '../assets/Technos/java.svg';
import pythonImage from '../assets/Technos/python.svg';
import dartImage from '../assets/Technos/dart.png';
import flutterImage from '../assets/Technos/flutter.svg';
import androidImage from '../assets/Technos/android.svg';
import swiftImage from '../assets/Technos/swift.svg';
import angularImage from '../assets/Technos/angular.svg';
import reactImage from '../assets/Technos/react.svg';
import phpImage from '../assets/Technos/php.svg';
import jsImage from '../assets/Technos/js.svg';
import tsImage from '../assets/Technos/ts.svg';
import vbscriptImage from '../assets/Technos/vbscript.png';
import uftImage from '../assets/Technos/uft.png';
import azureImage from '../assets/Technos/azure.png';
import kubernetesImage from '../assets/Technos/kubernetes.png';
import cicdImage from '../assets/Technos/cicd.png';
import dockerImage from '../assets/Technos/docker.svg';
import csharpImage from '../assets/Technos/csharp.png';
import cImage from '../assets/Technos/c.svg';
import cppImage from '../assets/Technos/cpp.png';
import assemblerImage from '../assets/Technos/asm.png';
import windowsImage from '../assets/Technos/windows.png';
import linuxImage from '../assets/Technos/linux.jpg';
import macosImage from '../assets/Technos/macos.jpg';
import anacondaImage from '../assets/Technos/anaconda.png';
import tensorflowImage from '../assets/Technos/tensorflow.png';
import raylibImage from '../assets/Technos/raylib.png';
import unityImage from '../assets/Technos/unity.jpg';

function Skills() {
  const skills = [
    {
      category: "Développement Mobile",
      items: [
        { name: "Flutter", image: flutterImage },
        { name: "Android", image: androidImage },
        { name: "Swift", image: swiftImage }
      ]
    },
    {
      category: "Développement Web",
      items: [
        { name: "Angular", image: angularImage },
        { name: "React", image: reactImage },
        { name: "PHP", image: phpImage },
        { name: "JavaScript", image: jsImage },
        { name: "TypeScript", image: tsImage }
      ]
    },
    {
      category: "Automatisation",
      items: [
        { name: "VBScript", image: vbscriptImage },
        { name: "UFT", image: uftImage }
      ]
    },
    {
      category: "DevOps",
      items: [
        { name: "Azure DevOps", image: azureImage },
        { name: "Kubernetes", image: kubernetesImage },
        { name: "CI/CD", image: cicdImage },
        { name: "Docker", image: dockerImage }
      ]
    },
    {
      category: "Applications",
      items: [
        { name: "Java", image: javaImage },
        { name: "C#", image: csharpImage },
        { name: "C", image: cImage },
        { name: "C++", image: cppImage }
      ]
    },
    {
      category: "Langages",
      items: [
        { name: "Python", image: pythonImage },
        { name: "Dart", image: dartImage }
      ]
    },
    {
      category: "Systèmes d'exploitation",
      items: [
        { name: "Windows", image: windowsImage },
        { name: "Linux", image: linuxImage },
        { name: "macOS", image: macosImage }
      ]
    },
    {
      category: "Intelligence Artificielle",
      items: [
        { name: "Anaconda", image: anacondaImage },
        { name: "TensorFlow", image: tensorflowImage }
      ]
    },
    {
      category: "Assembleur",
      items: [
        { name: "Assembleur", image: assemblerImage }
      ]
    },
    {
      category: "Développement 3D",
      items: [
        { name: "Raylib", image: raylibImage },
        { name: "Unity", image: unityImage }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skills-content">
              {skillCategory.items.map((item, itemIndex) => (
                <div className="skill" key={itemIndex}>
                  <img src={item.image} alt={item.name} className="skill-image" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
