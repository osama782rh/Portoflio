import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';
import Profile from './components/profile';
import Experiences from './components/experiences';
import Certifications from './components/certifications';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </>
          } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
