import React from "react";
import "./Trainers.css";
import { discoverData } from "../../assets/values";
// import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import Discover from "../../Components/Discover/Discover";
import Footer from "../../Components/Footer/Footer";

const Trainers = () => {
  return (
    <div className="trainers-container">
      {/* <Header  /> */}
      <Home
        ovlheight="400px"
        fontWeight="400"
        fontSize="44px"
        fontPara="26px"
        display="none"
        title={discoverData[5].title}
        paragraph={discoverData[5].paragraph}
      />

      <Discover />
      <div className="footer-margin">
        <Footer />
      </div>
    </div>
  );
};

export default Trainers;
