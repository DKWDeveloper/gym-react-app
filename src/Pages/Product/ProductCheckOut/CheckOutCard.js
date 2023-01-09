import React from "react";
import "./CheckOutCard.css";
import CheckCard from "./CheckCard/CheckCard"
import { useNavigate } from "react-router-dom";



const CheckOutCard = ({ products, addProduct, totalPrice }) => {
  const navigate = useNavigate();
  function isUserlogin() {
    if (!localStorage.getItem("islogged")) {
      navigate("/login")
    } else {
      navigate("/")


    }
  }

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

            {products.length === 0 ? "Add your Product Here" :
              <div className="subtotal-price">
                <span>subtotal</span>
                <span>({products.length} items):</span>

                <span>₹{totalPrice}.00</span>

              </div>}

            <div className="checkout-subtotal-container"></div>
          </div>

          {products.length === 0 ? "" :
            <div className="checkout-right-div">
              <div className="subtotal-container">
                <h3 className="subtotal">
                  Subtotal ({products.length} items):<span className="price-span">₹{totalPrice}.00</span>
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
                  <button className="buy-button" type="button" onClick={isUserlogin}>
                    Proceed to Buy
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CheckOutCard;
