import About from './components/About.jsx';
import "./App.css";
import "./script.js";
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';


import React, {useState, useEffect} from 'react';


function App() {

  return (
      <>
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Contact />
      </>
  );
  
}

export default App;
