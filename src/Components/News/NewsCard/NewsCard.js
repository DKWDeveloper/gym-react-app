import React from "react";
import "./NewsCard.css";

const NewsCard = ({ image, title, newsparagraph }) => {
  return (
    <div className="card-img-container-9 display-column-space">
      <div className="overlay-container-9">
        <img className="overlay-img-9" src={image} alt="overlay-container-9" />

        <div className="overlay-effect-2">
          <span className="btn-learn-more">LEARN MORE</span>
        </div>
      </div>
      <div className="content-9">
        <h3 className="h3-9">{title}</h3>
        <p className="paragraph-9">{newsparagraph}</p>
      </div>

      <div className="card-bottom-part">
        <i className="fa-regular fa-comment"></i>{" "}
        <span className="span-9">0 Comments</span>
        <div className="span-9 span-folder">
          <i className="fa-regular fa-folder"></i>
          <span>Sport</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
