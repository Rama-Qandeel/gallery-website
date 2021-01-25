import React from "react";
import about_1 from "../images/about1.jpg";
import about_2 from "../images/about2.jpg";
import about_3 from "../images/about3.jpg";

const About = ({ token }) => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Experiencing memories</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <p className="paragraph">
            Create an album in minutes. Making something special to save your
            memories
          </p>
          <div className="">
            {!token ? (
              <a
                href="/register"
                className="btn btn--gray btn--animated u-margin-left-meduim"
              >
                Let's start &rarr;
              </a>
            ) : null}
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={about_1}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={about_2}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={about_3}
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
