import React from "react";
import logo from "../images/Gallery-Logo.png";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Gallery from "./Gallery"

const Home = () => {
  return (
    <div>
      <header className="header">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
        <div className="header__nav-bar">
        <Navbar/>
        </div>  
        <div class="header__text-box">
                <h1 class="heading-primary">
                  <p className="icon-basic-photo heading-primary--main heading-primary__icon"></p>
                    <span class="heading-primary--main">Photo Albums</span>
                    <span class="heading-primary--sub">Create Your Most Beautiful Album.</span>
                </h1>
                <a href="/register" class="btn btn--gray btn--animated">Let's start</a>
            </div>
      </header>
      <main>
        <About/>
        <Gallery/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default Home;
