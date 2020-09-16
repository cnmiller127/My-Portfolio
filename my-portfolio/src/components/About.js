import React from "react";
import me from "../images/me.png";
import drumming from "../images/drumming.mp4";

function About(){

sessionStorage.clear();

return (

<main class="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">

    <section class="col-xl-8 col-lg-10 col-md-12 bg-white p-3">

        <div class= "row no-gutters">
            <div class= "col-12 px-3 pt-3">
                <h2 class ="bg-white text-dark">About</h2>
                <hr class="bold"/>
            </div>
        </div>

                <div class="row no-gutters">
                    <div class="col-12 px-3">
                        <img src= {me}  className="img-index float-left me-img my-2 mr-md-3"/>
                        <p class="pb-1 line-height"> Christian Miller is a full stack developer with an engineering background seeking a full time position. He recently earned a certificate from the Coding Bootcamp at UT Austin which intensively expanded his knowledge, proficiency, and experience in coding and web development. Christian's acquired critical thinking skills from his previous experience as a petroleum field engineer are highly transferable to software development. He has comprehensive time management abilities in both team and individual settings. Christian is a motivated problem solver who will troubleshoot and persevere through technical challenges. His vision is to collaborate with others to generate product success that benefits the customer experience.</p>
                        <p class="line-height"> Christian has experience using HTML, Javascript, CSS, Python, Node.js, Express.js, React.js, MongoDB, SQL, and is excited about learning new technologies. He also earned a B.S Degree in Petroleum Engineering from Penn State in 2016. </p>
                        <hr />
                    </div>
                </div>

                <div class="row no-gutters">
                    <div class="col-12 px-3">
                        <p class = "line-height">Christian is a self taught drummer. He spends much of his free time learning about rhythm and time by listening to other drummers. </p>
                        <label>Experimentation with 3 over 4 polymetrics: </label>
                        <video controls className = "drum-vid" src = {drumming} > 
                        </video>
                    </div>
                </div>

    </section>

</main>


)
}

export default About;