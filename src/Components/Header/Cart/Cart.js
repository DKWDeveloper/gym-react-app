import React from "react";
import "./Cart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/addproduct">
      <div className="cart-div">
        <AiOutlineShoppingCart />
        <span className="cart-value">100</span>
      </div>
    </Link>
  );
};

export default Cart;
