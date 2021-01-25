import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
    if (event.target.name === "name") {
      setName(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:5000/reg", { email, password, name })
      .then((response) => {
        // console.log(response);
        if (response.data) {
          props.history.push("/login");
        } else {
          alert("email is already exists");
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div className="section-register">
      <div className="row">
        <div className="register">
          <div className="register__container">
            <div className="register__form">
              <div className="u-margin-bottom-small u-center-text">
                <h2 className="heading-secondary">Register</h2>
              </div>

              <div className="register__form__group">
                <input
                  type="text"
                  className="register__form__input"
                  name="name"
                  placeholder="Display name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
                <label for="name" className="register__form__label">
                  Full name
                </label>
              </div>

              <div className="register__form__group">
                <input
                  type="email"
                  className="register__form__input"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label for="email" className="register__form__label">
                  Email address
                </label>
              </div>

              <div className="register__form__group">
                <input
                  type="password"
                  className="register__form__input"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  id="password"
                  required
                />
                <label for="password" className="register__form__label">
                  Password
                </label>
              </div>
              <div className="register__form__group u-center-text">
                <button
                  className="btn u-padding-btn u-gradient-color u-color"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div className="u-center-text u-margin-top-very-small">
                <a href="/login" className="u-bottom-simple">
                  {" "}
                  <span>Already member?</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
