import React from 'react';
import Header from './header';
import About from './about';
import Skills from './skills';
import Contact from './contact';
import Certifications from './certifications';
import Projects from './projects';

function Home() {
  return (
    <div>
      <section id="home">
        <Header />
      </section>
      <About />
      <section id="skills">
        <Skills />
      </section>
      <Projects />
      <Certifications />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
