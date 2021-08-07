import './App.css';
import React from "react";
import {
 
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <nav>
          
              <Link to="/home" activeClassName="selected" className="navi">Home</Link>
            
              <Link to="/about" activeClassName="selected" className="navi">About</Link>
            
              <Link to="/contact" activeClassName="selected" className="navi">Contact</Link>
            
              <Link to="/login" activeClassName="selected" className="navi">Login</Link>
            
        </nav>

        
        
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        
            
     
      
    </div>
  );
}

export default App;
