
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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

          <Switch>
          <Route path="/" exact render={(props)=><Home/>}/>
          {/* <Route path="/About" render={(props)=><About/>}/> */}
          {/* <Route path="/About" to={About}/>
          <Route path="/Projects" render={(props)=><Projects/>}/>
          <Route path="/Hire" render={(props)=><Hire/>}/> */}
          {/* <Route path='/marlon-portfolio/src/Pages/index.js' exact component={Home} ></Route> */}
        </Switch>

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
