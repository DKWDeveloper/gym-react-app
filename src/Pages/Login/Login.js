import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Register/Register.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleClick = () => {
    console.log("hello");
  };

  const submitForm = (e) => {
    // console.log("this is event", e)

    e.preventDefault();
  };

  function userHandler(event) {
    const val = event.target.value;
    if (val.length < 2) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  }

  function passwordHandler(event) {
    const passval = event.target.value;
    if (passval.length < 4) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  }

  // onSubmit={(e) => { e.preventDefault() }}

  return (
    <form onSubmit={submitForm}>
      <div className="container">
        <div className="login-box">
          <img
            className="brand-logo"
            src="https://gym.oceanwp.org/wp-content/uploads/2022/04/fitness-1.png"
            alt="logo"
          />
          <input
            autoComplete="on"
            className="input-field"
            type="text"
            placeholder="Enter your email"
            value={name}
            onChange={userHandler}
            required
          />
          {userErr ? <span>user Error</span> : ""}
          <input
            autoComplete="off"
            className="input-field"
            type="password"
            placeholder="Enter your password"
            value={pass}
            onChange={passwordHandler}
            required
          />
          {passErr ? <span>Error</span> : ""}

          <button
            type="submit"
            className="input-field reg-btn"
            onClick={handleClick}>
            Login
          </button>
          <p className="newReg">
            Not a member?
            <Link to="/register">
              <span className="spanReg">
                <u>Register</u>
              </span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
