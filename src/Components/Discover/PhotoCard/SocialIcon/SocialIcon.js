import React from "react";
import "./SocialIcon.css";
// import { FaBeer } from 'react-icons/fa';
// import { BsTwitter } from 'react-icons/bs';

function SocialIcon({ icon }) {
  return (
    <a className="social-card-hover" href=" ">
      <div className="nav-social-imgs1 card-social-icon-bg">
        <i className={icon}></i>
      </div>
    </a>

    // <FaBeer />
    // <BsTwitter />
  );
}

export default SocialIcon;
