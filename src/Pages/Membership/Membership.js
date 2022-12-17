import React, { Fragment } from "react";
import "./Membership.css";
import { discoverData } from "../../assets/values";
// import Header from "../../Components/Header/Header";
import { Customer } from "../../Components/Customer/Customer";
import Footer from "../../Components/Footer/Footer";
import Home from "../Home/Home";
import PriceCard from "../../Components/PriceCard/PriceCard";

function Membership() {
  return (
    <Fragment>
      <div className="membership-container">
        {/* <Header /> */}
        <Home
          ovlheight="400px"
          fontWeight="400"
          fontSize="44px"
          fontPara="26px"
          display="none"
          title={discoverData[2].title}
          paragraph={discoverData[2].paragraph}
        />
      </div>
      <div className="body-container display-hori-center">
        <PriceCard />
      </div>
      <div
        className="body-container display-hori-center"
        style={{ marginTop: "90px" }}>
        <Customer position="scroll" />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Membership;
