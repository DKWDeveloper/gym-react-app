import { Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Common/HomePage";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import LatestNews from "./Pages/LatestNews/LatestNews";
import Login from "./Pages/Login/Login";
import Membership from "./Pages/Membership/Membership";
import Product from "./Pages/Product/Product";
import CheckOutCard from "./Pages/Product/ProductCheckOut/CheckOutCard";
import ProductDetailCard from "./Pages/Product/ProductDetailCard/ProductDetailCard";
import Register from "./Pages/Register/Register";
import Trainers from "./Pages/Trainers/Trainers";
import TodoList from "./Practice/FunctionalComponent/TodoList/TodoList";
// import FetchGet from "./Practice/FunctionalComponent/FetchApi/FetchGet";
// import LocalStorage from "./Practice/FunctionalComponent/LocalStorage";
// import FetchPost from "./Practice/FunctionalComponent/FetchApi/FetchPost";
// import FetchPut from "./Practice/FunctionalComponent/FetchApi/FetchPut";

// import ComponentDidUpdate from "./Practice/ClassComponent/ComponentDidUpdate";

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function totaPriceOfproduct() {
    // console.log("This is for price only", products)
  }

  // totaPriceOfproduct()



  function addProduct(state, parameter2, index) {




    if (state === "add") {
      setProducts([...products, parameter2])
      //  console.log(products)
    }
    if (state === "delete") {
      // console.log("another", parameter2)
      setProducts(parameter2.filter((d, i) => index !== i))
      // parameter2.filter(p => p.id !== products.id)
      // setProducts(products.splice())
    } else {
      console.log("Do nothing")
    }
  }
  // console.log("item is added", products);

  // addProduct("state")
  // const [hide, setHide] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHide(true);
  //   }, 10000);
  // }, []);

  const location = useLocation();

  // if (location.pathname === "/login" || location.pathname === "/reg") {
  //   console.log("login page");
  // } else {
  //   console.log("reg page");
  // }

  return (
    <Fragment>
      {/*<FetchGet /> */}
      {/*<FetchPost /> */}

      {/*<FetchPut/>*/}

      {/* <LocalStorage /> */}
      {/* <ComponentDidUpdate name="Deepak" /> */}
      <div>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          ""
        ) : (
          <Header />
        )}

        <Routes>
          <Route path="/" element={<HomePage products={products} addProduct={addProduct} />} />
          <Route path="/products" element={<Product products={products} addProduct={addProduct} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/productcard" element={<ProductDetailCard products={products} addProduct={addProduct} />} />
          <Route path="/addproduct" element={<CheckOutCard products={products} addProduct={addProduct} />} />
          {/* <Route path="/list" element={<TodoList />} /> */}
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
