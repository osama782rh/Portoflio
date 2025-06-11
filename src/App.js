import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import Experiences from './components/experiences';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
