import React, { Component } from 'react'

const Navbar2 =({token})=> {
   
const logout=()=>{
  localStorage.clear()
}

        return (
          <nav style={{display:"grid"}}>
            {token?( <div><ul className="navigaton__2">
                 <li className="navigaton__2__item__2"><a href="/">Home</a></li>
                 <li className="navigaton__2__item__2"><a href="/photos">Gallery</a></li>
                 <li className="navigaton__2__item__2"><a href="/" onClick={logout}>Logout</a></li>
              </ul></div>):( <div><ul className="navigaton__2">
                 <li className="navigaton__2__item__2"><a href="/">Home</a></li>
                 <li className="navigaton__2__item__2"><a href="#">About</a></li>
                 <li className="navigaton__2__item__2"><a href="#">Conatct</a></li>
                 <li className="navigaton__2__item__2"><a href="/login">login</a></li>
              </ul></div>)}  
             
          </nav>
        )
    }


export default Navbar2;