import React, {useState, useEffect} from "react";
import wthr from "../images/wthr.png";
import date from "../images/date.png";
import quiz from "../images/quiz.png";
import fitness from "../images/fitness.png";
import movie from "../images/movie.PNG";
import rock from "../images/rock.png";

function Portfolio(){
    const [selected, setSelected] = useState("0");

    useEffect(() => {
        if(sessionStorage.getItem("val")){
            setSelected(JSON.parse(sessionStorage.getItem("val")));
        }
    },[])

    const handleClick = (event) => {
        event.preventDefault();
        const val = event.currentTarget.value;
        sessionStorage.setItem("val", JSON.stringify(val));
        setSelected(val);
    }
 
    if(selected === "0") {
        return (
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark">Portfolio</h2>
                                <hr className="bold"/>
                            </div> 
                        </div> 
                        <div className="row no-gutters">          
                            <div className="col-12 col-md-6 p-3">
                                    <button className = "p-0 project-btn" value="1" onClick = {handleClick}>
                                            <img src= {movie} className="img-portfolio card-img-top"/>
                                            <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                                <span>Virtual Movie Library</span>
                                            </div>
                                    </button>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                    <button className = "p-0 project-btn" value="2" onClick = {handleClick}>
                                            <img src= {rock} className="img-portfolio card-img-top"/>
                                            <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                                <span>Rock Trader</span>
                                            </div>
                                    </button>
                            </div>  
                        </div>
                        <div className="row no-gutters">
                            <div className="col-12 col-md-6 p-3">
                                <button className = "p-0 project-btn" value = "3" onClick = {handleClick}>
                                        <img src= {date} width = "200" height="150" className="img-portfolio card-img-top"/>
                                        <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                            <span>Date Night Generator</span>
                                        </div>
                                </button>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <button className = "p-0 project-btn" value="4" onClick = {handleClick}>
                                        <img src= {fitness} width = "200" height="150" className="img-portfolio card-img-top"/>
                                        <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                            <span>Fitness Tracker</span>
                                        </div>
                                </button>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            {/* <!-- flex needs to be turned off for img-portfolio to function properly --> */}
                            <div className="col-12 col-md-6 p-3 overlay">
                                <button className = "p-0 project-btn proj-border" value="5" onClick = {handleClick}>
                                    <img src= {wthr} className="img-portfolio card-img-top"/>
                                    <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Weather Dashboard</span>
                                    </div>
                                </button>
                            </div>
                            <div className="col-12 col-md-6 p-3">
                                <button className = "p-0 project-btn" value="6" onClick = {handleClick}>
                                    <img src= {quiz} className="img-portfolio card-img-top"/>
                                    <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                        <span>Coding Quiz</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>

            </main>

        )
    }
    else if(selected === "1"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Virtual Movie Librarian</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://project3-movie-app-2020.herokuapp.com/" target="_blank">
                                <img src= {movie} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Team Project:</strong> This MERN stack app allows the user to search for movies and store them in their virtual library by format. User authentication is required in order to track unique data for each user. The user can also add movies to their wish list. The project team consisted of Alex Crouch, Mark Yoon, Brogan Neegle, and myself.</p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
    else if(selected === "2"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Virtual Rock Trader</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://rock-trader-2020.herokuapp.com/" target="_blank">
                                <img src= {rock} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Team Project:</strong> This full stack app allows the user to keep track of their rock collection and trade rocks with other users (user authentication required). This was our second project at the Coding Bootcamp at UT Austin. The project uses mySQL, Node.js, Express route handling, jQuery, HTML, and CSS. The project team consists of Himaja Sriramaneni, Valeria Gonzalez, Aldo Patino, and myself.</p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
    else if(selected === "3"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Date Night Generator</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://cnmiller127.github.io/DinnerDateGenerator/" target="_blank">
                                <img src= {date} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Team Project:</strong> This was our first team project at the Coding Bootcamp at UT Austin. This app allows the user to choose special date night drinks, dinners, and music.  AJAX calls were made to obtain API data. The project team consists of Andi Virgen, Marisa Diaz, and myself.</p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
    else if(selected === "4"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Fitness Tracker</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://cnm-2020-fitness-tracker.herokuapp.com/?id=5f313f46bcfb7f0017f47f20" target="_blank">
                                <img src= {fitness} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Solo Project:</strong> This fitness app allows the user to track their workouts, and follow their improvement over time. The app uses MongoDB, Node.js, Express, jQuery, HTML, and CSS. </p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
    else if(selected === "5"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Weather Dashboard</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://cnmiller127.github.io/Weather-Dashboard/" target="_blank">
                                <img src= {wthr} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Solo Project:</strong> This weather app allows the user to search for the current weather as well as 5-day forecast in their area. The app utilizes the open-weather API. </p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
    else if(selected === "6"){
        return(
            <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
                    <section className="col-12 p-3 p-lg-5 sect"> 
                        <div className= "row no-gutters">
                            <div className= "col-12 px-3 pt-3">
                                <h2 className ="text-dark text-center">Coding Quiz</h2>
                                <hr className="bold"/>
                            </div> 
                        </div>
                        <div className="row no-gutters justify-content-center">          
                          <div className="col-12 col-md-6 p-3">
                            <a href= "https://cnmiller127.github.io/Coding-Quiz/" target="_blank">
                                <img src= {quiz} className="img-portfolio card-img-top"/>
                                <div className="card-body project-label bg-dark text-white d-flex align-items-center text-center justify-content-center">
                                    <span>Click here to view project!</span>
                                </div>
                            </a>
                         </div>
                         
                        </div>
                        <div>
                            <p className = "mx-5 my-2"><strong>Solo Project:</strong> This is a brief quiz on basic coding concepts. The quiz is timed, and removes 10 seconds from the clock when questions are answered incorrectly. It uses JavaScript, HTML, and CSS. </p>
                            <button className = "mx-5 back-btn" value = "0" onClick = {handleClick}>Back</button>
                        </div>
                    </section>
            </main> 
        )
    }
}

export default Portfolio;



// <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">
// <section className="col-12 bg-white p-3 p-lg-5"> 
//     <div className= "row no-gutters">
//         <div className= "col-12 px-3 pt-3">
//             <h2 className ="bg-white text-dark">Portfolio</h2>
//             <hr className="bold"/>
//         </div> 
//     </div> 
//     <div className="row no-gutters">          
//         <div className="col-12 col-md-6 p-3">
//             <a href= "https://project3-movie-app-2020.herokuapp.com/" target="_blank">
//                     <img src= {movie} className="img-portfolio"/>
//                     <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                         <span>Movie Librarian</span>
//                     </div>
//             </a>
//         </div>
//         <div className="col-12 col-md-6 p-3">
//                 <a href="https://rock-trader-2020.herokuapp.com/" target="_blank">
//                         <img src= {rock} className="img-portfolio"/>
//                         <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                             <span>Rock Trader</span>
//                         </div>
//                 </a>
//         </div>  
//     </div>
//     <div className="row no-gutters">
//         <div className="col-12 col-md-6 p-3">
//             <a href="https://cnmiller127.github.io/DinnerDateGenerator/" target="_blank">
//                     <img src= {date} width = "200" height="150" className="img-portfolio"/>
//                     <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                         <span>Date Night Generator</span>
//                     </div>
//             </a>
//         </div>
//         <div className="col-12 col-md-6 p-3">
//             <a href="https://cnm-2020-fitness-tracker.herokuapp.com/?id=5f313f46bcfb7f0017f47f20" target = "_blank">
//                     <img src= {fitness} width = "200" height="150" className="img-portfolio"/>
//                     <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                         <span>Fitness Tracker</span>
//                     </div>
//             </a>
//         </div>
//     </div>
//     <div className="row no-gutters">
//         {/* <!-- flex needs to be turned off for img-portfolio to function properly --> */}
//         <div className="col-12 col-md-6 p-3 overlay">
//             <a href="https://cnmiller127.github.io/Weather-Dashboard/" target="_blank">
//                 <img src= {wthr} className="img-portfolio"/>
//                 <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                 <span>Weather Dashboard</span>
//                 </div>
//             </a>
//         </div>
//         <div className="col-12 col-md-6 p-3">
//             <a href="https://cnmiller127.github.io/Coding-Quiz/" target="_blank">
//                 <img src= {quiz} className="img-portfolio"/>
//                 <div className="label bg-dark text-white mx-3 d-flex align-items-center text-center justify-content-center">
//                     <span>Coding Quiz</span>
//                 </div>
//             </a>
//         </div>
//     </div>
//  </section>

// </main>