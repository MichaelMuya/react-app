import About from './pages/Experience';
import Contact from '.pages/Contact';
import Experience from '.pages/Experience';
import Navbar from './Navbar';
import Profile from '.pages/Profile';


import React, {useState, useEffect} from 'react';
import axios from 'axios'


function App() {
const [jokes, setJokes] = useState([])
const [query, setQuery] = useState('teeth')

useEffect(() => {
  getResult();
})

const getResult = async () => {
  const reponse = await axios
  .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
  setJokes(reponse.data.result)
}


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
