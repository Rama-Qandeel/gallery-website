import React from "react";
import about_1 from "../images/about1.jpg"
import about_2 from "../images/about2.jpg"
import about_3 from "../images/about3.jpg"
const About=()=>{
    return(
      
        <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                    Experiencing memories
                    </h2>
                    </div>
                    <div class="row">
                    <div class="col-1-of-2">
                        <p class="paragraph">
                        Create an album in minutes. 
                        Relive your favorite photos anytime,
                         as a photo book or on any device.
                        </p>
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">
                            <img src={about_1} alt="Photo 1" class="composition__photo composition__photo--p1"/>
                            <img src={about_2} alt="Photo 2" class="composition__photo composition__photo--p2"/>
                            <img src={about_3} alt="Photo 3" class="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                    </div>  
              
                </section>
       
    )
}

export default About;