import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./Common/HomePage";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import LatestNews from "./Pages/LatestNews/LatestNews";
import Login from "./Pages/Login/Login";
import Membership from "./Pages/Membership/Membership";
import Register from "./Pages/Register/Register";
import Trainers from "./Pages/Trainers/Trainers";

function App() {
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
    <div>
      {location.pathname === "/login" || location.pathname === "/reg" ? (
        ""
      ) : (
        <Header />
      )}
      {/* {hide ? <></> : <Header />} */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/news" element={<LatestNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
