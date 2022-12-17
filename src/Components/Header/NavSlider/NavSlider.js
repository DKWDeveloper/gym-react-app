import React from "react";
import "./NavSilder.css";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import { FaAddressCard, FaHome, FaNewspaper } from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { AiFillContacts } from "react-icons/ai";
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
        collapsedWidth="30vw"
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
        <Menu style={{ marginTop: "100px", fontFamily: "san-sarif" }}>
          <MenuItem className="list-color" routerLink={<Link to="/" />}>
            <FaHome className="react-icon" />
            <span className="m-menu">Home</span>
          </MenuItem>
          <MenuItem className="list-color" routerLink={<Link to="/about-us" />}>
            <FaAddressCard className="react-icon" />
            <span className="m-menu">About</span>
          </MenuItem>
          <MenuItem
            className="list-color"
            routerLink={<Link to="/membership" />}>
            <MdCardMembership className="react-icon" />
            <span className="m-menu">Membership</span>
          </MenuItem>
          <MenuItem className="list-color" routerLink={<Link to="/trainers" />}>
            <IoIosFitness className="react-icon react-trainers" />
            <span className="m-menu">Trainers</span>
          </MenuItem>
          <MenuItem className="list-color" routerLink={<Link to="/news" />}>
            <FaNewspaper className="react-icon" />
            <span className="m-menu">News</span>
          </MenuItem>
          <MenuItem className="list-color" routerLink={<Link to="/contact" />}>
            <AiFillContacts className="react-icon react-trainers" />
            <span className="m-menu">contact</span>
          </MenuItem>
        </Menu>

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
