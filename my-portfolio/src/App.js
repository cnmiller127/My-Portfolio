import React from 'react';
import { Router as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./style.css";
import Spacer from './components/Spacer';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <div className = "container-fluid m-0 p-0 bg">
        <Navbar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Spacer/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
