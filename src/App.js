import React from 'react';
import Nav from './components/nav';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Footer from './components/Footer' 
import './App.css';
import {
  BrowserRouter
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
