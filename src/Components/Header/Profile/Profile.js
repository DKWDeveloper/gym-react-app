import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ position, top, left, transform }) => {
  return (
    <div
      className="profile-icon size"
      style={{
        position: position,
        top: top,
        left: left,
        transform: transform,
      }}>
      <img
        className="size"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNOpai32_rwcRrMxmpF4sNJG3CIR7yTPv7MD9qK4Ft5OdltMU6DymiRqxXRb0qtgGJoE&usqp=CAU"
        alt=""
      />
      <Link to="/login">
        <span className="reg-span">Sign In/Register</span>
      </Link>
    </div>
  );
};

export default Profile;
