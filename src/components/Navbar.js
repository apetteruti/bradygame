import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
             <h2> Score:  {props.total}   ||   {" "}

        
              Clicked: {props.correct} </h2>
            
          </li>
        </ul>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
