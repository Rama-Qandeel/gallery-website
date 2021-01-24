import React, { useState,useEffect } from 'react'
import jwt_decode from "jwt-decode";

const Navbar =()=> {
  const[token,setToken]=useState(null)

  const logout=()=>{
    localStorage.clear()
  }


  useEffect(() => {
    if(localStorage.getItem("token")){
      setToken (jwt_decode(localStorage.getItem("token")))
   }
  }, []);
        return (
          <nav>
     { !token?( <div>  <ul className="navigaton">
                 <li className="navigaton__item"><a href="/">Home</a></li>
                 <li className="navigaton__item"><a href="#">About</a></li>
                 <li className="navigaton__item"><a href="#">Conatct</a></li>
                 <li className="navigaton__item"><a href="/login">Login</a></li>
              </ul></div>):( <div>  <ul className="navigaton">
                 <li className="navigaton__item"><a href="/">Home</a></li>
                 <li className="navigaton__item"><a href="/photos">Gallery</a></li>
                 <li className="navigaton__item"><a href="/" onClick={logout}>Logout</a></li>
              </ul></div>) }   
          </nav>
        )
    }


export default Navbar;
