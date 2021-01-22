import React from "react";
import logo from "../images/Gallery-Logo.png";
const Footer = () => {
  return (
    <div>
       <div class="footer__logo-box">
                <img src={logo} alt="Full logo" class="footer__logo"/>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                   
                       Contact
                    </div>
               
                <div class="col-1-of-2">
                  
                        Built by Rama Qandel
                    
                </div>
            </div>
            </div>
    
  );
};

export default Footer;
