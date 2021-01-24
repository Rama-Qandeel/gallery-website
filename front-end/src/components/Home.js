import React, { useState,useEffect } from "react";
import logo from "../images/Gallery-Logo.png";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Gallery from "./Gallery"


const Home = ({token}) => {
  // console.log('token',token);
  
  return (
    <div>
      <header className="header">
        <div class="header__logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>
        <div className="header__nav-bar">
        <Navbar token={token}/>
        </div>  
        <div class="header__text-box">
                <h1 class="heading-primary">
                  <p className="icon-basic-photo heading-primary--main heading-primary__icon"></p>
                    <span class="heading-primary--main">Photo Albums</span>
                    <span class="heading-primary--sub">Create Your Most Beautiful Album.</span>
                </h1>
            {!token?( <a href="/register" class="btn btn--gray btn--animated">Register</a>):(null)}   
            </div>
      </header>
      <main>
        <About token={token}/>
        <Gallery/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default Home;
