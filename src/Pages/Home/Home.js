import React, { Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home({
  ovlheight,
  title,
  paragraph,
  paragraph2,
  display,
  fontSize,
  fontWeight,
  fontPara,
}) {
  return (
    <Fragment>
      <div className="backgound-overlay" style={{ minHeight: ovlheight }}></div>
      <div className="discover-container display-hori-center">
        <div className="discover-inner-container display-5">
          <h1
            className="discover-title"
            style={{ fontSize: fontSize, fontWeight: fontWeight }}>
            {title}
          </h1>
          <p className="discover-para" style={{ fontSize: fontPara }}>
            {paragraph}
            <br />
            {paragraph2}
            <br />
          </p>

          <div className="discover-button" style={{ display: display }}>
            <Link to="" className="btn-hover-1" href="">
              <span className="button-1 button-common"> LEARN MORE</span>
            </Link>
            <Link to="" className="btn-hover-2" href="">
              <span className="button-2 button-common"> VIEW PLANS</span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
