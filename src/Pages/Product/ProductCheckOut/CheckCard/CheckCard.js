import React from "react";
// import checkoutproduct from "../../../../assets/images/checkoutproduct.png";

function CheckCard({ products, addProduct }) {

  // console.log("checkCard data", products[0].ProductPrice)


  // console.log("map function ", products.map((data) => { return (data) }))
  return (products.map((data, index) => {





    return (<div className="checkout-product" key={index}>
      <div className="checkout-card-container">
        <div className="checkout-image">
          <img className="checkoutproductimage" src={data.ProductImage} alt="checkoutCard" />
        </div>
        <div className="checkout-detail-card">
          <h3 className="checkout-para">
            {data.ProductAbout}
          </h3>
          <p className="checkout-price">Price: ₹{data.ProductPrice}</p>
          <p className="stock-p">In stock</p>
          <p className="free-p">Eligible for FREE Shipping</p>
          <p></p>
          <p className="flavor-p">Flavor:Chocolate</p>
          <div className="product-remove-div">
            <button className="product-remove" onClick={() => addProduct("delete", products, index)}>Remove</button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="horizontal-line2"></div>
    </div>);
  })

  );
}

export default CheckCard;
