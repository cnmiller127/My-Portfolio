import React from "react";
import me from "../images/me.png";

function Home(){

return (

<main class="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">

    <section class="col-xl-6 col-lg-8 col-md-12 bg-white p-3">

        <div class= "row no-gutters">
            <div class= "col-12 px-3 pt-3">
                <h2 class ="bg-white text-dark">About</h2>
                <hr class="bold"/>
            </div>
        </div>

                <div class="row no-gutters">
                    <div class="col-12 px-3">
                        <img src= {me}  className="img-index float-left me-img my-2 mr-md-3"/>
                    
                    
                        <p class="pb-1 line-height"> Christian Miller is originally from Boston, Massachusetts. His interests include coding, baseball, hockey, music, and playing the drums.  </p>

                        <p class="line-height"> Christian has experience using HTML, Javascript, CSS, Python, Node.js, Express.js, React.js, MongoDB, SQL, and is excited about learning new languages. </p>
                        <p class="line-height"> Before entering the Technology industry, Christian worked as a Petroleum Field Engineer in Texas and Pennsylvania.  </p>
                        <a href = "https://linkedin.com/in/christian-miller-1b8194125" className = "about-link"> LinkedIn Profile </a>
                        <a href = "https://github.com/cnmiller127" className = "about-link"> Github Profile </a>

                        
                    </div>
                </div>

    </section>

</main>


)
}

export default Home;