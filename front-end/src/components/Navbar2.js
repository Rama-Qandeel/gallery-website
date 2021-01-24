import React, { Component } from 'react'

const Navbar2 =()=> {
   
const logout=()=>{
  localStorage.clear()
}

        return (
          <nav style={{display:"grid"}}>
              <ul className="navigaton__2">
                 <li className="navigaton__2__item__2"><a href="/">Home</a></li>
                 <li className="navigaton__2__item__2"><a href="/photos">Gallery</a></li>
                 <li className="navigaton__2__item__2"><a href="/" onClick={logout}>Logout</a></li>
              </ul>
          </nav>
        )
    }


export default Navbar2;