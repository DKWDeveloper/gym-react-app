import React from "react";
import "./NavSilder.css";
import { Sidebar, useProSidebar, sidebarClasses } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import SliderListItem from "./SliderListItem/SliderListItem";
import { SliderListData } from "../../../assets/values/index";

const NavSlider = () => {
  //   const { collapseSidebar, collapsed } = useProSidebar();
  const { collapseSidebar } = useProSidebar();
  //   let i = <p>Mt O</p>;

  //   const [sidebar, setSidebar] = useState(false);

  return (
    <div className="menu-mobile" style={{ position: "fixed", zIndex: 999999 }}>
      <Sidebar
        width="0vw"
        defaultCollapsed={false}
        collapsedWidth="50vw"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            height: "100vh",
            // zIndex: 99999,
            // position: 'fixed',
          },
        }}>
        <Profile
          position="absolute"
          left="50%"
          transform="translate(-50%, -50%)"
          top="45px"
        />

        <SliderListItem />

        <main className="toggle-close">
          <button
            className="btn close-btn"
            onClick={() => {
              collapseSidebar();
              // setSidebar(!sidebar)
            }}>
            close
          </button>
        </main>
      </Sidebar>
    </div>
  );
};

export default NavSlider;
