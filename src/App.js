import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Navbar from './pages/Navbar';
import Profile from './pages/Profile';


import React, {useState, useEffect} from 'react';


function App() {

  return (
      <div className='profile'>
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Contact />
      </div>
  );
  
}

export default App;
