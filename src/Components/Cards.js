import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import harryPics from "../pictures/harry.jpg";
import hagridPics from "../pictures/hagrid.jpg";
import hedwigPics from "../pictures/hedwig.jpg";
import hermionePics from "../pictures/hermione.jpg";
import malfoyPics from "../pictures/malfoy.webp";
import voldermortPics from "../pictures/voldemort.webp";
import Header from "./Header";

import "../styles/style.css";

const Cards = (props) => {
  const [allCards, setAllCards] = useState({
    harry: {
      key: uniqid(),
      name: "Harry Potter",
      imgUrl: harryPics,
      clicked: false,
      order: 0,
    },
    hagrid: {
      key: uniqid(),
      name: "Rubeus Hagrid",
      imgUrl: hagridPics,
      clicked: false,
      order: 0,
    },
    hedwig: {
      key: uniqid(),
      name: "Hedwig",
      imgUrl: hedwigPics,
      clicked: false,
      order: 0,
    },
    hermione: {
      key: uniqid(),
      name: "Hermione Jean Granger",
      imgUrl: hermionePics,
      clicked: false,
      order: 0,
    },
    malfoy: {
      key: uniqid(),
      name: "Draco Lucius Malfoy",
      imgUrl: malfoyPics,
      clicked: false,
      order: 0,
    },
    voldemort: {
      key: uniqid(),
      name: "Lord Voldemort",
      imgUrl: voldermortPics,
      clicked: false,
      order: 0,
    },
  });

  useEffect(() => {
    const randomizeOrder = (e) => {
      let usedNumbers = [];
      function randomNumber() {
        let number = Math.floor(Math.random() * 6) + 1;
        return number;
      }

      for (let character in allCards) {
        let orderNumber = randomNumber();
        setAllCards((prevState) => ({
          ...prevState,
          [character]: {
            key: allCards[character].key,
            name: allCards[character].name,
            imgUrl: allCards[character].imgUrl,
            clicked: allCards[character].clicked,
            order: orderNumber,
          },
        }));
      }
    };

    let event = document.querySelectorAll(".card");
    event.forEach((ev) => {
      ev.addEventListener("click", randomizeOrder);
    });

    return () => {
      event.forEach((ev) => {
        ev.removeEventListener("click", randomizeOrder);
      });
    };
  }, [allCards]);

  
  return (
    <div>
      <div className="cardBox">
        {Object.keys(allCards).map((cards) => {
          return (
            <div
              data-key={allCards[cards].key}
              className="card"
              key={allCards[cards].key}
              style={{ order: allCards[cards].order }}
            >
              <img
                data-key={allCards[cards].key}
                src={allCards[cards].imgUrl}
                className="characters"
              ></img>
              <p>{allCards[cards].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
