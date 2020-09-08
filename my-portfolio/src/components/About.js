import React from "react";
import me from "../images/me.png";
import drumming from "../images/drumming.mp4";

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
                    
                    
                        <p class="pb-1 line-height"> Christian Miller is originally from Boston, Massachusetts. His interests include coding, drumming, playing sports, and traveling. He also enjoys collaborating with others to accomplish goals.  </p>

                        <p class="line-height"> Christian has experience using HTML, Javascript, CSS, Python, Node.js, Express.js, React.js, MongoDB, SQL, and is excited about learning new technologies. </p>
                        <p class="line-height"> Before entering the tech industry, Christian worked as a Petroleum Field Engineer in Texas and Pennsylvania.  </p>
                        <hr />
                        

                        
                    </div>
                </div>

                <div class="row no-gutters">
                    <div class="col-12 px-3">
                        <label>3 over 4 experimentation on the drums: </label>
                        <video controls className = "drum-vid" src = {drumming} > 
                        </video>
                    </div>
                </div>

    </section>

</main>


)
}

export default Home;