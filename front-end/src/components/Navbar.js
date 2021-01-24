import React, { Component } from 'react'

const Navbar =()=> {
   
        return (
          <nav>
              <ul className="navigaton">
                 <li className="navigaton__item"><a href="/">Home</a></li>
                 <li className="navigaton__item"><a href="#">About</a></li>
                 <li className="navigaton__item"><a href="#">Conatct</a></li>
                 <li className="navigaton__item"><a href="/login">Login</a></li>
              </ul>
          </nav>
        )
    }


export default Navbar;
