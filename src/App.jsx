import { useState } from 'react'
import NavBar from './components/NavBar';
import Home from './views/Home';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Home />
        {/* <About />
        <Achievements/>
        <Projects />
      
        <Contact /> */}
        
      </div>
    </div>
  );
}

export default App
