import React from "react";
import "./LatestNews.css";
import { discoverData } from "../../assets/values";
import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";
import News from "../../Components/News/News";
import Home from "../Home/Home";

const LatestNews = () => {
  return (
    <div
      className="membership-container"
      style={{
        backgroundImage: `url("https://gym.oceanwp.org/wp-content/uploads/2022/03/gym-header1.jpg ")`,
      }}>
      {/* <Header /> */}
      <Home
        ovlheight="400px"
        fontWeight="400"
        fontSize="44px"
        fontPara="26px"
        display="none"
        title={discoverData[3].title}
        paragraph={discoverData[3].paragraph}
      />

      <News />

      <div style={{ marginTop: "70px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default LatestNews;
