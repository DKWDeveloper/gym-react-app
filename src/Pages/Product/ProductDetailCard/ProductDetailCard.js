import React from "react";
import "./ProductDetailCard.css";
// import protein from "../../../assets/images/protein.png";
import ProductSideImage from "./ProductSideImage/ProductSideImage";
import { tableData } from "../../../assets/values";
import ProducSpecsTable from "./ProducSpecsTable";
import ProductDeliveryIcon from "./ProductDeliveryIcon";
import AboutItem from "./AboutItem";
import { Link, useLocation } from "react-router-dom";




//products, addProduct

function ProductDetailCard({ products, addProduct }) {




  const location = useLocation();
  const SideImage = [
    {
      id: 0,
      img: location.state.Image,
    },

    {
      id: 1,
      img: location.state.Image,
    },

    {
      id: 2,
      img: location.state.Image,
    },
  ];


  const ProductId = location.state.id;
  const ProductTitle = location.state.Title;
  const ProductImage = location.state.Image;
  const ProductPrice = location.state.Price
  const ProductAbout = location.state.About


  const productObj = {
    ProductId: location.state.id,
    ProductTitle: location.state.Title,
    ProductImage: location.state.Image,
    ProductPrice: location.state.Price,
    ProductAbout: location.state.About,
    Quantity: location.state.Quantity

  }



  // useEffect(() => {



  //   return () => {
  //   }
  // }, [])


  // console.log(location.state)



  // addProduct("delete", "action")

  // console.log(products)
  // console.log(addProduct("add"))
  // const additem = () => {
  //   alert("additem");
  // };
  return (
    <div className="detailCard-container">
      <div className="detailCard-inner-container">
        <div className="detailCard-side-img">
          {SideImage.map((imgData, index) => {

            return <ProductSideImage key={index} img={imgData.img} />;
          })}
        </div>

        <div className="detailCard-large-img">
          <img src={ProductImage} className="large-img" alt="large-img" />
        </div>

        <div className="product-detailCard">
          <h2>{ProductTitle}</h2>
          <div className="customer-rating">
            <span>★★★★★</span>
            <span className="customer-reviews">(5.0 Customer reviews)</span>
          </div>
          <span className="product-mrp">MRP:₹{ProductPrice}</span>
          <p className="product-deal-day">Deal of the Day: 3,200</p>
          <p className="product-description">
            Gold Standard Whey Blend – 24g blended protein consisting of whey
            protein isolate, whey protein concentrate, and whey peptides to
            support lean muscle mass – they don't call it the Gold Standard of
            standard for nothing What Does It Have - 5 grams of naturally
            occurring BCAAs and over 4 grams of glutamine and glutamic acid in
            each serving ‚which helps to build lean and strong muscles; Gluten
            Free When To Use - Great before or after exercise, between meals,
            with a meal, or any time of day where you need extra protein in your
            nutrition
          </p>
          <div className="delivery-container">
            <ProductDeliveryIcon />
          </div>
          <div className="horizontal-line"></div>
          <div className="product-specs-table">
            <table>
              <tbody>
                {tableData.map((specsData, index) => {
                  return (
                    <ProducSpecsTable
                      key={index}
                      tableName={specsData.tableName}
                      tableData={specsData.tableData}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="horizontal-line"></div>
          <div className="about-item-container">
            <p className="about-item-para">About this item</p>
            <ul className="about-ul-list">
              <AboutItem />
            </ul>
          </div>
          <div className="horizontal-line"></div>

          <div className="product-add-div">

            <Link to={{ pathname: "/addproduct", state: { h: "Hello world from Home" } }}>
              <button className="product-add-cart" onClick={() => addProduct("add", productObj)}>
                Add to Cart
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
