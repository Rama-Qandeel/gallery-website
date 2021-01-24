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
}


const handleSubmit = (event) => {
    axios
        .post("http://localhost:5000/reg",{email,password,name})
        .then((response) => {
            // console.log(response);
          if (response.data) {
            props.history.push("/login");
            alert("create an account");
          } else {
            alert("email is already exists");
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  
    return (
        <div class="section-register">
          <div class="row">
          <div class="register">
          <div class="register__form">
           
            </div>
            </div>
         </div>
        </div>
      );
    }
export default Register;

{/* <h1 class="heading-primary">
<span class="heading-primary-main">Register</span>
</h1>
<div>
<input
  type="email"
  name="email"
  placeholder="Email"
  value={email}
  onChange={handleChange}
  required
/>
</div>
<div>
<input
  type="password"
  name="password"
  placeholder="Password"
  value={password}
  onChange={handleChange}
  required
/>
</div>
<div>
<input
  type="text"
  name="name"
  placeholder="Display name"
  value={name}
  onChange={handleChange}
  required
/>
</div>
<button onClick={handleSubmit}>Register</button>
</div> */}