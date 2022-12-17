import React from "react";
import { BodyData, NewsCardData } from "../../assets/values";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./News.css";
import NewsCard from "./NewsCard/NewsCard";

const News = () => {
  return (
    <div className="container-9">
      <div className="inner-container-9">
        <HomeHeader
          headimg={BodyData[4].img}
          title={BodyData[4].headtitle}
          bodypara={BodyData[4].bodypara}
        />
        <div className="main-card-div">
          {NewsCardData.map((data, index) => {
            return (
              <NewsCard
                key={index}
                image={data.image}
                title={data.title}
                newsparagraph={data.newsparagraph}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
