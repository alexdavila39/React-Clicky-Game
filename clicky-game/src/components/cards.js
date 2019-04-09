import React from "react";


const card ={
    height:"200px",
    width:"200px",
    

}
function Cards(props) {
  return (
      <div className ="col-3">
    <div style={card} id={props.id} className="card" onClick= { () => props.checkAnswer(props.id)}>
    <img src={props.image} className="card-img-top" alt="..."/>
  </div>
  </div>
  );
}

export default Cards;