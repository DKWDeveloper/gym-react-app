import React from "react";
import { Link } from "react-router-dom";

const List = ({ menu, to }) => {
  return (
    <div>
      <li className="menu-options">
        <Link className="menu-scroll" to={to}>
          {menu}
        </Link>
      </li>
    </div>
  );
};

export default List;
