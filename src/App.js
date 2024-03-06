import React from "react";

import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Card from "./components/Card.js";

import cardData from "./data.js";




export default function App() {
  const cardElements = cardData.map(elem => {
    return (
      <Card
        key={elem.id}
        elem={elem}
      /> 
    )
  })

  return (
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  );
}
