import React from "react";
import logo from "../images/Gallery-Logo.png";
const Footer = () => {
  return (
    <div className="footer" >
       <div class="footer__logo-box">
                <img src={logo} alt="Full logo" class="footer__logo"/>
            </div>
            <div class="row u-margin-left">
                <div class="col-1-of-2 ">
                <h3 class="footer__conatct">
                Contact  </h3>
                <p className="footer__conatct__details">Rama.qndeel@gmail.com</p>
                <p className="footer__conatct__details">0799137234</p>    
                    </div>
               
                <div class="col-1-of-2"> 
                <h3 class="footer__about">
                About
                    </h3>
 <p className="footer__about__details"> Built by <a href="https://www.linkedin.com/in/ramaqandeel/" class="footer__link">Rama Qandeel</a>
</p> 
                </div>
            </div>
            </div>
    
  );
};
export default Footer;
