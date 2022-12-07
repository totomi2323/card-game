import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import harryPics from "../pictures/harry.jpg";
import hagridPics from "../pictures/hagrid.jpg";
import hedwigPics from "../pictures/hedwig.jpg";
import hermionePics from "../pictures/hermione.jpg";
import malfoyPics from "../pictures/malfoy.webp";
import voldermortPics from "../pictures/voldemort.webp";

import "../styles/style.css";

const Cards = (props) => {
  const [allCards, setAllCards] = useState([
    {
      key: uniqid(),
      name: "Harry Potter",
      imgUrl: harryPics,
      clicked: false,
      order: 2,
    },
    {
      key: uniqid(),
      name: "Rubeus Hagrid",
      imgUrl: hagridPics,
      clicked: false,
      order: 5,
    },
    {
      key: uniqid(),
      name: "Hedwig",
      imgUrl: hedwigPics,
      clicked: false,
      order: 6,
    },
    {
      key: uniqid(),
      name: "Hermione Jean Granger",
      imgUrl: hermionePics,
      clicked: false,
      order: 4,
    },
    {
      key: uniqid(),
      name: "Draco Lucius Malfoy",
      imgUrl: malfoyPics,
      clicked: false,
      order: 3,
    },
    {
      key: uniqid(),
      name: "Lord Voldemort",
      imgUrl: voldermortPics,
      clicked: false,
      order: 1,
    },
  ]);


  return (
    <div className="cardBox">
      {allCards.map((cards) => {
        return (
          <div className="card" key={cards.key} 
          style={{order: cards.order}}>
            <img src={cards.imgUrl} className="characters"></img>
            <p>{cards.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
