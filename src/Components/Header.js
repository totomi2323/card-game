import React from "react";

const Header = (props) => {
  
  return (
    <header>
      <div>
        <h1>Harry Potter Card Game</h1>
      </div>
      <div>
        <div>Score : {props.score}</div>
        <div>Best Score :{props.bestScore}</div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
    </header>
  );
};

export default Header;
