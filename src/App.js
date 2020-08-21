import React from 'react';
import Nav from './components/nav';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AboutMe />
      <Skills />
      <Projects />
    </BrowserRouter>
    
  );
}

export default App;
