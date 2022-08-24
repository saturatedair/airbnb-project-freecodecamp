import React from "react";
import PhotoGrid from "../images/photogrid.png";

function Grid() {
  return (
    <section className="grid-part">
      <img src={PhotoGrid} alt="Various photos" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Grid;
