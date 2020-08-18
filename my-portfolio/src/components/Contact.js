import React from "react";

function Contact(){
    return(
    <main className="row p-3 py-md-5 p-lg-5 justify-content-md-start justify-content-center no-gutters">

    <form className="col-xl-6 col-lg-8 col-md-12 bg-white p-3">
        
        
        <div className= "row no-gutters">
            <div className= "col-12 px-3 pt-3">
                <h2 className ="bg-white text-dark">Contact</h2>
                <hr className="bold"/>
            </div>
            
        </div>  
        
        <div className="px-3">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="name" className="form-control" id="name" placeholder="John Smith" aria-describedby="Name"/>
            </div>
            <div className="form-group">
                <label for="email">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="Example@gmail.com" aria-describedby="Name"/>
            </div>
            <div className="form-group ">
                <label for="message">Message</label>
                <textarea className="form-control" aria-label="withtextarea"></textarea>
            </div>

            <button type="submit" className=" btn btn-primary bg-dark text-white">Submit</button>
        </div>
        </form>


</main>
)
}

export default Contact;