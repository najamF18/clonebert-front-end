import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function LogIn() {
  const [user, setUserData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setUserData({
      ...user,
      rememberMe: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { data } = await axios.post("http://localhost:8000/token/", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["access"]}`;
    window.location.href = "/home";
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">LogIn</h3>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="enter email"
              className="form-control"
              name="email"
              id="email"
              value={user.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="enter password"
              className="form-control"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            ></input>
          </div>

          <div className="d-grid mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-group form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="check"
              name="rememberMe"
              checked={user.rememberMe}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="check" className="form-check-label ms-2">
              Remember me
            </label>
          </div>
          <p className="text-center mb-3">
            <Link to="/forgotpassword">Forgot password?</Link>
          </p>
          <p className="text-center mb-4">
            Don't have an account?
            <Link to="/signup" className="ms-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
