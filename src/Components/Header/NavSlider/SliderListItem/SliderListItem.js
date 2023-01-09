import React from "react";
import { useProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaAddressCard,
  FaHome,
  FaNewspaper,
  FaProductHunt,
} from "react-icons/fa";
import { MdCardMembership } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { AiFillContacts } from "react-icons/ai";
// import { SliderListData } from "../../../../assets/values/index";

export const SliderListData = [
  { link: "/", name: "Home", icon: FaHome },
  { link: "/products", name: "Product", icon: FaProductHunt },
  { link: "/about-us", name: "About", icon: FaAddressCard },
  { link: "/membership", name: "Membership", icon: MdCardMembership },
  { link: "/trainers", name: "Trainers", icon: IoIosFitness },
  { link: "/news", name: "News", icon: FaNewspaper },
  { link: "/contact", name: "Contact", icon: AiFillContacts },
];

const SliderListItem = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <Menu style={{ marginTop: "100px", fontFamily: "san-sarif" }}>
      {SliderListData.map((item, index) => {
        const Icon = item.icon;
        return (
          <MenuItem key={"listItem_" + index} className="list-color" routerLink={<Link to={item.link} />} onClick={() => collapseSidebar()}>
            <Icon className="react-icon" />
            <span className="m-menu">{item.name}</span>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default SliderListItem;
