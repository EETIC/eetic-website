import React from "react";
import './css/navBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
function navBar(){
    return(
      <div className="navbox">
      <Navbar>
        
         <div className="logo l1">
         EETICommunity
         </div>

         <div className="logo l2">
         EETIC
         </div>
         <div className="logo l3">
         ommunity
         </div>
         <div className="links">
           <div className="home mouse">Home</div>
           <div className="events mouse">Events</div>
           <div className="about mouse">About Us</div>
           <div className="team mouse">Team</div>
           </div>
           <div className="signIn mouse">Sign in</div>
        <Button className="nav-btn">Sign Up</Button>
      </Navbar>    
      </div>
    );
}

export default navBar;