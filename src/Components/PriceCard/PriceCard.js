import React from "react";
import "./PriceCard.css";
import { BodyData, CardDetail } from "../../assets/values";
import HomeHeader from "../HomeHeader/HomeHeader";
import Pcard from "./Pcard/Pcard";

const PriceCard = () => {
  return (
    <div className="main-container-8 display-hori-center">
      <div className="inner-cnt-8">
        <HomeHeader
          headimg={BodyData[0].img}
          title={BodyData[3].headtitle}
          bodypara={BodyData[3].bodypara}
        />

        <div className="card-cnt">
          {CardDetail.map((CardData) => {
            return (
              <Pcard
                display={CardData.display}
                key={CardData.id}
                plan={CardData.plan}
                basicPlan={CardData.basic}
                rate={CardData.price}
                week={CardData.week}
                facility={CardData.facility}
                park={CardData.park}
                DietPlan={CardData.DietPlan}
                Personal={CardData.Personal}
                extra={CardData.extra}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
