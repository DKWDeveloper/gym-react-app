import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ position, top, left, transform, }) => {
  const [showProfile, setShowProfile] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("islogged")) {
      // console.log(localStorage.getItem('islogged'))
      setShowProfile(true)
    }


  }, [])



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
        src={showProfile ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNOpai32_rwcRrMxmpF4sNJG3CIR7yTPv7MD9qK4Ft5OdltMU6DymiRqxXRb0qtgGJoE&usqp=CAU" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SiTWYOrsL_Ea5ILRPJlK9bLlBUFgxvyu1TFL4F2JBQ&s"}
        alt=""
      />
      {showProfile ? <p className="profile-name" style={{ color: "white", fontSize: "10px" }}>DK</p> : <Link to="/login">
        <p className="reg-span"></p>
      </Link>
      }
    </div>

  );
};

export default Profile;
