import React from "react";
import "./style.css";


function Cards(props) {
    const styler = {
        backgroundImage: `url(${props.image})`
    }
  return (
      <div className ="col-3">
    <div  id={props.id} className="card" onClick= { () => props.checkAnswer(props.id)} style={styler}>
    {/* <img src={props.image} className="card-img-top" alt="..."/> */}
  </div>
  </div>
  );
}

export default Cards;