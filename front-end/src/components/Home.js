import React from "react";
import logo from "../images/Gallery-Logo.png";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
      </header>
    </div>
  );
};

export default Home;
