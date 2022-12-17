import React from "react";
import "./Testmoney.css";

const Testmoney = (props) => {
  return (
    <div className="cutomer-testmonnials">
      <div className="cutomer-testmonnials-1 display-column">
        <p>{props.testmoney1}</p>
      </div>

      <div className="cutomer-testmonnials-1 display-column">
        <p>{props.testmoney2}</p>
      </div>
    </div>
  );
};

export default Testmoney;
