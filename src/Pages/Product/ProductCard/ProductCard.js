import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
// import ReadMoreReact from 'read-more-react';

// products,
//   addProduct,
//   product_image,
//   product_title,
//   about_product,
//   product_price,

const ProductCard = (props) => {
  const text = props.about_product;
  // console.log("props", props)
  // const id = {}
  const navigate = useNavigate();


  const DatatoProductDetail = () => {

    navigate("/productcard", {
      state: {

        Title: props.product_title,
        Image: props.product_image,
        Price: props.product_price,
        About: text
      }
    })



  }


  // console.log("products Card", products)
  // console.log(addProduct("add"))

  return (
    <div className="product-main-container">
      <div className="product-inner-container">
        <div className="product-img-container">
          <img
            className="product-image"
            src={props.product_image}
            // src="https://cdn.pixabay.com/photo/2022/11/07/10/13/christmas-7576056_960_720.jpg"
            alt="product"
          />
        </div>

        <div className="product-detail">
          <h3 className="product-title">
            {props.product_title.length > 20
              ? props.product_title.substring(0, 20) + ""
              : props.product_title}
          </h3>
          <p className="product-specs">
            {text.length > 50 ? text.slice(0, 50) + "...." : text}
          </p>
          <p className="product-rating">★★★★★</p>
          <p className="product-price">₹{props.product_price}</p>
        </div>
      </div>

      <div className="">
        {/* <Link to={{
          pathname: "/productcard", state: {
            Title: props.product_title,
            Image: props.product_image,
            Price: props.product_price,
            About: text
          }
        }}> */}
        <button className="add-cart-btn" type="button" onClick={DatatoProductDetail}>
          Add Cart
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProductCard;
