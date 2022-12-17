// import React from 'react';
import { BodyData } from "../../assets/values";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Discover.css";
import PhotoCard from "./PhotoCard/PhotoCard";
import { photocard } from "../../assets/values";

const Discover = () => {
  return (
    <div className="body-container">
      <div className="inner-body-container">
        <HomeHeader
          headimg={BodyData[1].img}
          title={BodyData[1].headtitle}
          bodypara={BodyData[1].bodypara}
        />

        <div className="inner-body-row-5">
          {photocard.map((item, i) => {
            return (
              <PhotoCard
                key={i}
                id={item.id}
                img={item.img}
                cardparagraph={item.cardparagraph}
                cardtitle={item.cardtitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
