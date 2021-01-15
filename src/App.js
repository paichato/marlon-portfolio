
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {React, useState} from 'react';
import Home from './Pages';
import About from './Pages/About';
import { NavC } from './NavC';
import {Sidebar} from './Sidebar.js';
import Projects from './Pages/Projects';
import Hire from './Pages/Hire';



function App() {
   const [hover, setHover]= useState(false);
   const onHover=()=>{
       setHover(!hover)
   }

  const[isOpen, setIsOpen]=useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }
  
  return (
    
      <div style={{background:'black'}}>
      <Router>
      <NavC toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Home/>
      <About/>
      <Projects/>
      <Hire/>
      

      </Router>
      </div>
    // </div>
  )
}

export default App;
