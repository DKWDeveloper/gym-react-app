import React from "react";
import "./Pcard.css";

const Pcard = ({
  products,
  addProduct,
  display,
  plan,
  basicPlan,
  rate,
  week,
  facility,
  park,
  DietPlan,
  Personal,
  extra,
}) => {
  // console.log("pricecard_props", products)
  return (
    <div className="card-no-1 display-column-space">
      <div className="ribbon" style={{ display: display }}>
        <span>populer</span>
      </div>

      <div className="card-heading">
        <h2>{plan}</h2>
        <h4>{basicPlan}</h4>
      </div>
      <div className="card-price">
        <div className="card-price-doller">
          <span className="span-original-price">
            <span className="span-currency">$</span>
            {rate}
          </span>
        </div>
        <div>
          <h5 className="price-h5">/ month</h5>
        </div>
      </div>
      <div className="card-content">
        <p>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {week}
        </p>
        <p>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {facility}
        </p>
        <p>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {park}
        </p>
        <p>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {DietPlan}
        </p>
        <p>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {Personal}
        </p>
        <p style={{ border: "none" }}>
          <i className="circle-check fa-regular fa-circle-check"></i>
          {extra}
        </p>
      </div>
      <div className="card-button" onClick={addProduct}>CHOOSE PLAN</div>
    </div>
  );
};

export default Pcard;
