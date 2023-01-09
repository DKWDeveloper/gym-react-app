import { Fragment, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Common/HomePage";
import ProtectedRoute from "./Common/ProtectedRoute";
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
// import FetchData from "./Practice/FunctionalComponent/FetchApi/FetchData";
// import TodoList from "./Practice/FunctionalComponent/TodoList/TodoList";
// import FetchGet from "./Practice/FunctionalComponent/FetchApi/FetchGet";
// import NewsApi from "./Practice/FunctionalComponent/FetchApi/NewsApi";
import LocalStorage from "./Practice/FunctionalComponent/LocalStorage";
// import FetchPost from "./Practice/FunctionalComponent/FetchApi/FetchPost";
// import FetchPut from "./Practice/FunctionalComponent/FetchApi/FetchPut";
// import ComponentDidUpdate from "./Practice/ClassComponent/ComponentDidUpdate";

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(999);
  // const [counter, setCounter] = useState(0)


  // Subtotal()


  // products.map((item, i) => console.log(item.ProductPrice))


  function Subtotal() {
    let sum = 0;
    products.forEach((item, i) => {
      sum = sum + item.ProductPrice * item.Quantity;
      // return sum;
      // setTotalPrice(sum)
    });
    return sum;
  }

  useEffect(() => {
    setTotalPrice(Subtotal())
    // products.map((item, i) => console.log(item.ProductPrice))
  }, [products])

  // useEffect(() => {
  //   console.log("using use useEffect")
  // }, [])





  // function totaPriceOfproduct() {
  //   for (let i = 0; i < products.length; i++) {
  //     console.log(products[1].ProductPrice)

  //   }
  //   // console.log("This is for price only", products)
  // }

  // totaPriceOfproduct()



  function addProduct(state, parameter2, index) {
    if (state === "add") {
      setProducts([...products, parameter2])


      // let pros = [...products];


      // let index = pros.findIndex((item) => {
      //   console.log("my item", item)
      //   if (item.ProductId === parameter2.ProductId) {
      //     return true;
      //   }
      // })

      // if (index > -1) {
      //   // setProducts({ ...item })
      // } else {

      // }

      // let modArray = pros.map((item, index) => {
      //   if (item.ProductId === parameter2.ProductId) {
      //     return { ...item, Quantity: item.Quantity + 1 }
      //   }
      // })

      // setProducts(pros)




      // setProducts(parameter2.reduce((acc, curr) => acc.includes(curr) ? acc : [...acc, curr], ...products))
      // const arrProduct = [...products, parameter2]



      // setProducts(products.filter((data, ind) => data.ProductId !== parameter2.ProductId ? { ...data } : data))
      // setProducts(arrProduct.filter((item, ind) => item.ProductId !== parameter2.productId ? { ...item } : item))
      // setProducts([...new Set(arrProduct)])
      // setProducts(arrProduct.map((data, index) => arrProduct.indexOf(data) === index, console.log(data)))
      // console.log("check what is this", [...products, parameter2])

    }
    else if (state === "delete") {
      setProducts(parameter2.filter((d, i) => index !== i))
    }
    else if (state === "increase") {

      let pros = [...products];



      setProducts(pros.map((item, index) => item.ProductId === parameter2.ProductId ? { ...item, Quantity: item.Quantity + 1 } : item))

    }
    else if (state === "decrease") {


      setProducts([...products].map((item, index) => item.id === parameter2.id ? { ...item, Quantity: item.Quantity - (item.Quantity > 1 ? 1 : 0) } : item))
    }
    else {
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



  return (
    <Fragment>
      {/* <NewsApi /> */}
      {/* <FetchGet /> */}
      {/*<FetchPost /> */}

      {/*<FetchPut/>*/}

      {/* <LocalStorage /> */}
      {/* <ComponentDidUpdate name="Deepak" /> */}
      <div>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          ""
        ) : (
          <Header products={products} />
        )}

        <Routes>
          {/* <Route path="/" element={<ProtectedRoute Component={<HomePage products={products} addProduct={addProduct} />} />} /> */}

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
          <Route path="/addproduct" element={<CheckOutCard products={products} addProduct={addProduct} totalPrice={totalPrice} />} />
          {/* <Route path="/list" element={<TodoList />} /> */}
          {/* <Route path="/list" element={<FetchData />} /> */}
          <Route path="/local" element={<LocalStorage />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
