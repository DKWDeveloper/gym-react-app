import React, { Fragment, useState } from "react";
import "./Header.css";
import HEADER from "../../assets/values";
import { Link } from "react-router-dom";
import List from "./List/List";

import { useProSidebar } from "react-pro-sidebar";
import Profile from "./Profile/Profile";
import "./HeaderMediaQuery.css";
import NavSlider from "./NavSlider/NavSlider";
import Cart from "./Cart/Cart";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  // useEffect(() => {
  //   console.log("init");

  //   return () => {
  //     console.log("going to die");
  //   };
  // }, []);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const { collapseSidebar } = useProSidebar();

  return (
    <Fragment>
      <NavSlider />
      <div className="">
        {/* <div className="backgound-overlay" style={{ minHeight: ovlheight,  }}></div> */}

        <div
          className={navbar ? "navbar1 Nav-bar display" : "Nav-bar display"}
          id="navbar1">
          <div className="Nav-bar-inner display-row">
            <div className="Nav-logo-left display-start">
              <Link className="brand-hover" to="/brand">
                <img
                  className="Nav-brand-logo"
                  src="https://gym.oceanwp.org/wp-content/uploads/2022/04/fitness-1.png"
                  alt="brand-logo"
                />
              </Link>
              <Link className="title-hover" to="#">
                <h1 className="title" id="title-black">
                  {HEADER[0].title}
                </h1>
              </Link>
            </div>

            <div className="Nav-bar-inner-right display-end">
              <ul className="Nav-menu-list display">
                {/*<li style={{color: "yellow"}}>dddd{values.name}</li> */}
                {HEADER.map((list, index) => {
                  return (
                    <List key={index} menu={list.menu} to={list.to}>
                      <p>My name p</p>
                    </List>
                  );
                })}
              </ul>
              <Link className="search-a" to="/">
                <i className="search-s nav-search-img display-vertical-center fa-solid fa-magnifying-glass"></i>
              </Link>
              <div className="nav-social-cnt display-hori-center">
                <Profile />

                {/* <Link className="social-hover" to=""><i
                                    className=" nav-social-imgs1 display nav-social-bg-1 fa-brands fa-twitter"></i></Link>
                                <Link className="facebook-hover" to="/fb"> <i
                                    className=" nav-social-imgs1 display nav-social-bg-2 fa-brands fa-facebook"></i></Link>
                                <Link className="youtube-hover" to="/yt"> <i
                            className=" nav-social-imgs1 display nav-social-bg-3 fa-brands fa-youtube"></i></Link> */}
              </div>

              <Cart />
              {/* hello */}
            </div>
          </div>
          <input type="checkbox" id="click" />

          <button
            className="btn toggle-btn-close"
            onClick={() => collapseSidebar()}>
            &#9776;
          </button>
          {/* <label  htmlFor="click" id="burger-span">
                <i id="menu-ham" className="span-burger-btn fas fa-bars"></i>
               </label> */}
        </div>
      </div>
    </Fragment>
  );
}
