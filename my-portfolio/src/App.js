import React from 'react';
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./style.css";
import Spacer from './components/Spacer';
import Footer from './components/Footer';



function App() {
  return (
    
      <div className = "container-fluid m-0 p-0 bg">
        <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Spacer/>
        <Footer/>
      </div>
    
  );
}

export default App;
