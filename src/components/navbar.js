import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light">
    <div className="title"><h1>Clicky Game</h1>
    </div>
    <div className="guessPrompt">{props.result}</div>
    <div className = "Score">{props.score}</div>
</nav>
  );
}

export default Navbar;
