import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="body-card-1">
      <div className="body-card-inner-1">
        <figure>
          <img className="card-img" src={props.img} alt="card-img" />
        </figure>
        <div className="">
          <h2 className="h2-card">{props.cardtitle}</h2>
          <p className="p-para">{props.cardparagraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
