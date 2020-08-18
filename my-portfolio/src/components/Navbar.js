import React from "react";

function Navbar(){
    return(
        <header className="row bg-white pl-md-3 pl-lg-5  no-gutters">
           
        <name className="col-lg-3 col-md-4 col-12 text-center p-0  "> 
        <h3 className ="m-auto bg-dark text-white head-text py-3">Christian Miller</h3>
    </name>
    <nav class="navbar navbar-expand navbar-light col-lg-9 col-md-8 col-sm-12 justify-content-md-end justify-content-center">
          <div className="navbar-nav pr-md-3">
              
            <a className="nav-item nav-link px-3" href="/#/about">About </a>
            <a className="nav-item nav-link px-3" href="/#/portfolio">Portfolio </a>
            <a className="nav-item nav-link px-3" href="/#/contact">Contact </a>
        
          </div>
      </nav>
</header>
    )
}

export default Navbar;