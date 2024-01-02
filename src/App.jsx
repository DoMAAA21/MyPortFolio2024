import NavBar from './components/NavBar';
import Home from './views/Home';
import About from './views/About';
import Works from './views/Works';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <Home />
        <About />
        <Works/>
        {/* <Projects /> */}
      
        {/* <Contact /> */}
        
      </div>
    </div>
  );
}

export default App
