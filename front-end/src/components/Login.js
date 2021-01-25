import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((response) => {
        if (
          response.data ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          return alert("Invalid email");
        }
        if (response.data === "Wrong password.") {
          return alert("Invalid password");
        }
        if (response.data) {
          localStorage.setItem("token", response.data);
          props.history.push("/profile");
        }
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  };

  return (
    <div className="section-register">
      <div className="row">
        <div className="register">
          <div className="register__container">
            <div className="register__form">
              <div className="u-margin-bottom-small u-center-text">
                <h2 className="heading-secondary">login</h2>
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
                  login
                </button>
              </div>
              <div className="u-center-text">
                <a href="/register" className="u-bottom-simple">
                  {" "}
                  <span>Don't have an acount. </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
