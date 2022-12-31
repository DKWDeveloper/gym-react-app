import React, { Fragment } from "react";
import { aboutData } from "../../../assets/values/index";

const AboutItem = () => {
  return (
    <Fragment>
      {aboutData.map((data, index) => {
        return (
          <li className="aboutItem-list" key={index}>
            <span>{data.about}</span>
          </li>
        );
      })}
    </Fragment>
  );
};

export default AboutItem;
