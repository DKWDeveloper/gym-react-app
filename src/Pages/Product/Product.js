import React, { Fragment } from "react";
import "./Product.css";
import { ProductData } from "../../assets/values/index";

import ProductCard from "./ProductCard/ProductCard";
// import { useEffect } from "react";
// import { useState } from "react";

const Product = ({ products, addProduct }) => {



  // console.log("product", products)
  // console.log("add:::", addProduct("add"))
  // console.log(additem);
  // console.log(name)
  // console.log(ProductData[5].about_product.length)
  // const [t, setT] = useState("ty");

  // useEffect(() => {
  //   setTimeout(() => {}, 5000);
  // }, []);

  return (
    <Fragment>
      <div className="display-property">
        <div className="display-inner-property">
          {ProductData.map((data, index) => {
            return (
              <ProductCard
                id={data.id}
                addProduct={addProduct}
                products={products}
                key={index}
                product_image={data.product_image}
                product_title={data.product_title}
                about_product={data.about_product}
                product_price={data.product_price}
                Quantity={data.Quantity}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
