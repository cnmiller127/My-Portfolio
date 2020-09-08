import React from "react";
import linkedInLogo from "../images/linkedIn.png";
import gitHubLogo from "../images/gitHub.png";

function Navbar(){
    return(
        <header className="row bg-white pl-md-3 pl-lg-5  no-gutters">
           
        <name className="col-lg-3 col-md-4 col-12 text-center p-0  "> 
        <h3 className ="m-auto bg-dark text-white head-text py-3">Christian Miller</h3>
    </name>
    <nav class="navbar navbar-expand navbar-light col-lg-9 col-md-8 col-sm-12 justify-content-md-end justify-content-center">
          <div className="navbar-nav pr-md-3">
              
            <a className="nav-item nav-link px-3" href="/My-Portfolio/#/about">About </a>
            <a className="nav-item nav-link px-3" href="/My-Portfolio/#/portfolio">Portfolio </a>
            <a className="nav-item nav-link px-3" href="/My-Portfolio/#/contact">Contact </a>
            <a href = "https://linkedin.com/in/christian-miller-1b8194125" className = "nav-item nav-link about-link px-3" target = "_blank" ><img className = "logos" src = {linkedInLogo} alt = "LinkedIn Profile"></img> </a>
            <a href = "https://github.com/cnmiller127" className = "about-link px-1" target = "_blank"><img className = "logos" src = {gitHubLogo} alt = "GitHub Profile"></img></a>
        
          </div>
      </nav>
</header>
    )
}

export default Navbar;