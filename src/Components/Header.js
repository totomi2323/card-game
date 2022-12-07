import React, { useState } from "react";

const Header = (props) => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <header>
      <div>
        <h1>Harry Potter Card Game</h1>
      </div>
      <div>
        <div>Score : {score}</div>
        <div>Best Score : {bestScore}</div>
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
    </header>
  );
};

export default Header;
