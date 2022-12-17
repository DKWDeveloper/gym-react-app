import React from "react";
import "./CardTrainer.css";

export function CardTrainer(props) {
  return (
    <div
      className="card-inner-inner-cnt"
      style={{ paddingTop: props.paddingTop }}>
      <img className="card-image" src={props.img} alt="logo" />
      <div className="float-right">
        <h3 className="circuit-heading">{props.title}</h3>
        <p className="card-para">{props.paragraph}</p>
      </div>
    </div>
  );
}
