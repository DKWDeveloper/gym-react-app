import React from "react";
import "./CheckOutCard.css";
import CheckCard from "./CheckCard/CheckCard";
import { useLocation } from "react-router-dom";


// products, addProduct
const CheckOutCard = ({ products, addProduct }) => {

  // console.log(products)
  // const location = useLocation()
  // console.log("checkout product", props.products)

  // console.log("hello", location.state)
  // console.log("Heloo", products)
  // console.log("remove", addProduct("delete"))
  // products.reduce((price, value, i) => {
  //   let sum = 0
  //   let rate = parseFloat(price.ProductPrice)

  //   sum = sum + rate
  //   console.log("Hhjhjhhj:::", sum)

  //   return (
  //     // console.log(price.ProductPrice)
  //   )
  // })
  return (
    <div className="main">
      <div className="checkcard-main-container">
        <div className="checkoutcard-inner-container">
          <div className="checkout-left-container">
            <div className="checkout-head">
              <h1 className="checkout-title">Shopping Cart</h1>
            </div>
            <div className="horizontal-line2"></div>

            <CheckCard products={products} addProduct={addProduct} />
            {/* <CheckCard />
            <CheckCard />
            <CheckCard />
            <CheckCard /> */}
            {/* <CheckCard /> */}

            <div className="subtotal-price">
              <span>subtotal</span>
              <span>({products.length} items):</span>
              <span>10,998.00</span>
            </div>

            <div className="checkout-subtotal-container"></div>
          </div>

          <div className="checkout-right-div">
            <div className="subtotal-container">
              <h3 className="subtotal">
                Subtotal (1 item):<span className="price-span">₹3,314.00</span>
              </h3>
              <div className="suborder-box">
                <input className="myInput" type="checkbox" />
                <span className="checkbox-span">
                  <label className="order-gift">
                    This order contains a gift
                  </label>
                </span>
              </div>
              <div className="proceed-btn">
                <button className="buy-button" type="button">
                  Proceed to Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;
