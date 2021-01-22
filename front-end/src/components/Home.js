import React from "react";
import logo from "../images/Gallery-Logo.png";

const Home = () => {
  return (
    <div>
      <header className="header">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
        <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Photo Albums</span>
                    <span class="heading-primary--sub">Create Your Most Beautiful Album.</span>
                </h1>

                <a href="#section-tours" class="btn btn--white btn--animated">Let's start</a>
            </div>
      </header>
    </div>
  );
};

export default Home;
