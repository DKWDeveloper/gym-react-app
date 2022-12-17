import React from "react";
import { BodyData, testmonials } from "../../assets/values";
import HomeHeader from "../HomeHeader/HomeHeader";
import "./Customer.css";
import Testmoney from "./Testmoney/Testmoney";

export const Customer = ({ position }) => {

    

    return (
        <div className="main-container-6" style={{ backgroundAttachment: position, }}>
            <div
                className="backgound-overlay backgound-overlay-6"
                style={{ minHeight: "100%" }}></div>
            <div className="main-inner-cnt-6">
                <HomeHeader
                    color="white"
                    headimg={BodyData[2].img}
                    title={BodyData[2].headtitle}
                    bodypara={BodyData[2].bodypara}
                />
                <div className="testmonials-cnt">
                    <Testmoney
                        testmoney1={testmonials[0].testMonial}
                        testmoney2={testmonials[1].testMonial}
                    />
                    <Testmoney
                        testmoney1={testmonials[2].testMonial}
                        testmoney2={testmonials[3].testMonial}
                    />

                </div>
            </div>
        </div>
    );
};
