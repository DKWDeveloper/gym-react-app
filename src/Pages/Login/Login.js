import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  function Login() {
    localStorage.setItem("islogged", true)
    // localStorage.setItem("User", user)
    // localStorage.setItem("Password", password)
    navigate('/')

  }


  function userHandler(e) {
    setUserError('')
    setUser(e.target.value)

  }

  function passwordHandler(e) {
    setPasswordError('')
    setPassword(e.target.value)

  }

  function handleFromSubmit(e) {
    // console.log(e)
    Login();
    e.preventDefault();
    // if (user !== "") {


    // }
    // else {

    //   setUserError("Email is required")
    // }

    // if (password !== "") {

    // }
    // else {
    //   setPasswordError("Password is required")
    // }
  }

  // const navigate = useNavigate();
  // // useEffect(() => {
  // let login = localStorage.getItem("islogged");
  // if (login) {
  //   navigate('/')
  // }
  // }, [])




  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");

  // const handleClick = () => {
  //   console.log("hello");
  // };

  // const submitForm = (e) => {
  //   // console.log("this is event", e)

  //   e.preventDefault();
  // };

  // function userHandler(event) {
  //   const val = event.target.value;
  //   if (val.length < 2) {
  //     setUserErr(true);
  //   } else {
  //     setUserErr(false);
  //   }
  // }

  // function passwordHandler(event) {
  //   const passval = event.target.value;
  //   if (passval.length < 4) {
  //     setPassErr(true);
  //   } else {
  //     setPassErr(false);
  //   }
  // }

  // onSubmit={(e) => { e.preventDefault() }}

  return (
    <form action="" onSubmit={handleFromSubmit}>
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
            type="email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            placeholder="Enter your email"
            value={user}
            onChange={userHandler}
            required
          />
          {userError && <p className="form-error">{userError}</p>}

          <input
            autoComplete="off"
            className="input-field"
            type="password"
            placeholder="Enter your password"
            value={password}
            pattern=".{8,16}$"
            onChange={passwordHandler}
            required
          />
          {passwordError && <p className="form-error">{passwordError}</p>}



          <button
            type="submit"
            className="input-field reg-btn"
          // onClick={Login}
          >
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
