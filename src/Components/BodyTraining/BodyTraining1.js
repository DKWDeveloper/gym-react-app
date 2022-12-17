import "./BodyTraining.css";
import { CardTrainer } from "./CardTrainer/CardTrainer";
import { TrainHeader } from "./TrainHeader/TrainHeader";
import { cardTrainer, trainHeader } from "../../assets/values";
import { SideImg } from "./SideImg/SideImg";
import { sideImg } from "../../assets/values";
//import HomeHeader from '../HomeHeader/HomeHeader';

import React from "react";

function BodyTraining1() {
  return (
    <div
      className="main-container-4 display-hori-center"
      style={{ marginTop: "0px" }}>
      <div className="inner-container-4 display-vertical-center">
        <SideImg image={sideImg[1].image} paddingRight="20px" />

        <div
          className="inner-leftside leftside-inner-cnt"
          style={{ marginLeft: "30px", paddingBottom: "40px" }}>
          <TrainHeader visibility="hidden" title={trainHeader[1].headtitle} />
          <div className="card-inner-pic-cnt cardinner-pic">
            <CardTrainer
              id={cardTrainer[0].id}
              img={cardTrainer[0].image}
              title={cardTrainer[3].title}
              paragraph={cardTrainer[0].paragraph}
            />

            <CardTrainer
              paddingTop="50px"
              id={cardTrainer[4].id}
              img={cardTrainer[4].image}
              title={cardTrainer[4].title}
              paragraph={cardTrainer[1].paragraph}
            />

            <CardTrainer
              paddingTop="50px"
              id={cardTrainer[5].id}
              img={cardTrainer[5].image}
              title={cardTrainer[5].title}
              paragraph={cardTrainer[2].paragraph}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyTraining1;
