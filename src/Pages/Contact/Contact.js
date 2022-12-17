import React from "react";
import { discoverData } from "../../assets/values";
import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";
// import News from '../../Components/News/News'
import Home from "../Home/Home";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      className="membership-container"
      style={{
        backgroundImage: `url("https://gym.oceanwp.org/wp-content/uploads/2022/03/gym-header3.jpg")`,
      }}>
      {/* <Header /> */}
      <Home
        ovlheight="400px"
        fontWeight="400"
        fontSize="44px"
        fontPara="26px"
        display="none"
        title={discoverData[4].title}
        paragraph={discoverData[4].paragraph}
      />

      {/*<News />*/}
      <ContactForm />

      <div style={{ marginTop: "70px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
