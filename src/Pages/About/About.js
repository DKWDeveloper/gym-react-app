import React, { Fragment } from "react";
import "./About.css";
import { BodyData, discoverData } from "../../assets/values";
// import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import MainCard from "../Card/MainCard";
import BodyTraining1 from "../../Components/BodyTraining/BodyTraining1";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <Fragment>
      <div className="about-container">
        {/* <Header /> */}
        <Home
          ovlheight="400px"
          fontWeight="400"
          fontSize="44px"
          fontPara="26px"
          display="none"
          title={discoverData[1].title}
          paragraph={discoverData[1].paragraph}
        />
      </div>

      <div className="body-container display-hori-center">
        <div className="inner-body-container">
          <HomeHeader
            headimg={BodyData[0].img}
            title={BodyData[0].headtitle}
            bodypara={BodyData[0].bodypara}
          />

          <MainCard />
        </div>
      </div>

      <div
        className="body-container display-hori-center"
        style={{ marginTop: "90px" }}>
        <BodyTraining1 />
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
