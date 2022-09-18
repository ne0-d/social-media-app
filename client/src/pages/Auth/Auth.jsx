import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setisSignUp] = useState(true);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });

  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      // if (data.password !== data.confirmpass) {
      //   setConfirmPass(false);
      // }
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  return (
    <div className="Auth">
      {/* Left side */}

      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Venn Chat</h1>
          <h6>Connect without boundaries</h6>
        </div>
      </div>

      {/* Right side */}

      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>{isSignUp ? "Sign up" : "Log in"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            {/* <input
                  type="email"
                  placeholder='Email'
                  className='infoInput'
                  name='email'
                  onChange={handleChange}
                /> */}

            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />

            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              fontSize: "11px",
              alignSelf: "flex-end",
              color: "red",
            }}
          >
            *Passwords does not match
          </span>

          <div>
            <span
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setisSignUp((prevValue) => !prevValue);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account Log in!"
                : "Don't have an account Sign up!"}
            </span>
          </div>
          <button
            className="button infoButton"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Loading..." : isSignUp ? "Sign up" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
