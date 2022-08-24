import React from "react";
import star from "../images/star.png";

function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img src={`../images/${props.img}`} alt="Card" className="card-img" />
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="rate">
        <img src={star} alt="star img" />
        <p>{props.rating}</p>
        <p>
          {" "}
          ({props.reviewCount}). {props.country}
        </p>
      </div>
      <p className="card-exp">{props.title}</p>
      <strong>From {props.price}$</strong>
      <span>/person</span>
    </div>
  );
}

export default Card;
