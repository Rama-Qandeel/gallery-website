import React, { useState, useEffect } from "react";

const Navbar = ({ token }) => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <nav>
      {!token ? (
        <div>
          {" "}
          <ul className="navigaton">
            <li className="navigaton__item">
              <a href="/">Home</a>
            </li>
            <li className="navigaton__item">
              <a href="/">About</a>
            </li>
            <li className="navigaton__item">
              <a href="/">Contact</a>
            </li>
            <li className="navigaton__item">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          {" "}
          <ul className="navigaton">
            <li className="navigaton__item">
              <a href="/">Home</a>
            </li>
            <li className="navigaton__item">
              <a href="/photos">Gallery</a>
            </li>
            <li className="navigaton__item">
              <a href="/" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
