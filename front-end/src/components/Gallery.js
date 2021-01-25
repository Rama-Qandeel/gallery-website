import React, { useState, useEffect } from "react";
import useFirestore from "./useFirestore";

const Gallery = () => {
  const { docs } = useFirestore("images");

  const render = docs.map((doc, i) => {
    return (
      <div key={doc.id}>
        <div className="img-wrap__2">
          <img style={{ height: "50px" }} src={doc.url} alt="uploaded pic" />
        </div>
      </div>
    );
  });

  return (
    <div className="section-gallery">
      <div className="img-grid__2">
        {render[0]}
        {render[1]}
        {render[3]}
        {render[4]}
        {render[5]}
        {render[6]}
        {render[7]}
        {render[8]}
        {render[9]}
        {render[10]}
        {render[11]}
        {render[12]}
      </div>
      <div className="u-center-text">
        <a href="/photos" className="btn btn--gray btn--animated  ">
          More &rarr;
        </a>
      </div>
    </div>
  );
};

export default Gallery;
