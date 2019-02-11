import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
  
    <div className="jumbotron color">
      <div className = "row">
      <div className = "col md-4">
      <img id = "img-control" src ="http://i.ebayimg.com/images/i/222326020027-0-1/s-l1000.jpg"></img>
      </div>
      
      <div className = "col md-8">
      <br></br>
      <h1 className = "font">Don't click the same Brady twice!</h1>
       </div>
    
    </div>
    </div>
    
  
  );
}

export default Jumbotron;
