import React from "react";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import Card from "./components/Card";
import data from "./data";

const cardElements = data.map((item) => {
  return (
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      title={item.title}
      price={item.price}
      country={item.country}
      openSpots={item.openSpots}
      location={item.location}
    />
  );
});
function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Grid />
        <div className="cards">{cardElements}</div>
      </div>
    </div>
  );
}

export default App;
