import React from "react";
import wheySmallr from "../../../../assets/images/wheySmallr.png";

function ProductSideImage({ img }) {
  return (
    <div className="detailCard-side-div">
      <img src={img} className="detailCard-small-img" alt="" />
    </div>
  );
}

export default ProductSideImage;
