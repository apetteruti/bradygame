import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className = "card" 
    value = {props.id}
    onClick = {() => {props.clickedFunction(props.id)}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content"> */}
      {/* </div> */}
    </div>  
  );
}

export default Card;

