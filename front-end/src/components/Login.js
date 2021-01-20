import React, { useState } from "react";
import axios from "axios";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[errorEmail,setErrorEmail]=useState(null)
  const[errorPassword,setErrorPassword]=useState(null)


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
      .post("http://localhost:5000/login",{email,password})
      .then((response) => {
        if (response.data === "There is no user record corresponding to this identifier. The user may have been deleted.") {
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
    <div>
      <h1 class="heading-primary">
        <span class="heading-primary-main">Login</span>
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
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
