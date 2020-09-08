import React from "react";
import wthr from "../images/wthr.png";
import date from "../images/date.png";
import quiz from "../images/quiz.png";
import fitness from "../images/fitness.png";
import movie from "../images/movie.PNG";
import rock from "../images/rock.png";

function Portfolio(){
return (
    <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">

            <section className="col-xl-6 col-lg-8 col-md-12 bg-white p-3">
                
                <div className= "row no-gutters">
                    <div className= "col-12 px-3 pt-3">
                        <h2 className ="bg-white text-dark">Portfolio</h2>
                        <hr className="bold"/>
                    </div>
                    
                </div> 

                <div className="row no-gutters">
                    {/* <!-- flex needs to be turned off for img-portfolio to function properly --> */}
                    <div className="col-12 col-md-6 p-3 overlay">
                        <a href="https://cnmiller127.github.io/Weather-Dashboard/" target="_blank">
                            <img src= {wthr} className="img-portfolio"/>
                            <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                            <span>Weather Dashboard</span>
                            </div>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 p-3">
                        <a href="https://cnmiller127.github.io/Coding-Quiz/" target="_blank">
                            <img src= {quiz} className="img-portfolio"/>
                            <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                                <span>Coding Quiz</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-12 col-md-6 p-3">
                        <a href="https://cnmiller127.github.io/DinnerDateGenerator/" target="_blank">
                                <img src= {date} width = "200" height="150" className="img-portfolio"/>
                                <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                                    <span>Date Night Generator</span>
                                </div>
                        </a>
                    </div>
                
                
                    <div className="col-12 col-md-6 p-3">
                        <a href="https://cnm-2020-fitness-tracker.herokuapp.com/?id=5f313f46bcfb7f0017f47f20" target = "_blank">
                                <img src= {fitness} width = "200" height="150" className="img-portfolio"/>
                                <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                                    <span>Fitness Tracker</span>
                                </div>
                        </a>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-12 col-md-6 p-3">
                            <a href="https://rock-trader-2020.herokuapp.com/" target="_blank">
                                    <img src= {rock} className="img-portfolio"/>
                                    <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                                        <span>Rock Trader</span>
                                    </div>
                            </a>
                    </div>            
                
                    <div className="col-12 col-md-6 p-3">
                        <a href= "https://project3-movie-app-2020.herokuapp.com/" target="_blank">
                                <img src= {movie} className="img-portfolio"/>
                                <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
                                    <span>Movie Librarian</span>
                                </div>
                        </a>
                    </div>
                 

                </div>
               
             </section>

    </main>

)
}

export default Portfolio;