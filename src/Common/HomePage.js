import React, { Fragment } from "react";
import { BodyData } from "../assets/values";
import { BodyTraining } from "../Components/BodyTraining/BodyTraining";
import BodyTraining1 from "../Components/BodyTraining/BodyTraining1";
import { Customer } from "../Components/Customer/Customer";
import Detail from "../Components/Detail/Detail";
import Discover from "../Components/Discover/Discover";
import Footer from "../Components/Footer/Footer";
// import Header from "../Components/Header/Header";
import HomeHeader from "../Components/HomeHeader/HomeHeader";
import News from "../Components/News/News";
import PriceCard from "../Components/PriceCard/PriceCard";
import Subscriber from "../Components/Subscriber/Subscriber";
import MainCard from "../Pages/Card/MainCard";
import Home from "../Pages/Home/Home";
import { discoverData } from "../assets/values";

function HomePage({ products, addProduct }) {

  // console.log(products);
  // console.log(addProduct("add"));
  return (
    <Fragment>
      <div className="first-container">
        {/* <Header /> */}
        <Home
          title={discoverData[0].title}
          paragraph={discoverData[0].paragraph}
          paragraph2={discoverData[0].paragraph2}
        />
      </div>
      <div className="body-container display-hori-center">
        <div className="inner-body-container">
          <HomeHeader
            headimg={BodyData[0].img}
            title={BodyData[0].headtitle}
            bodypara={BodyData[0].bodypara}
          />
          <div className="inner-body-row">
            <MainCard />
          </div>
        </div>
      </div>
      <BodyTraining />
      <Discover />
      <Customer />
      <BodyTraining1 />
      <PriceCard products={products} addProduct={addProduct} />
      <Subscriber />
      <News />
      <Detail />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
